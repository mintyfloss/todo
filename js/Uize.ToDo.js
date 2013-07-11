Uize.module ({
	name:'Mintyfloss.ToDo',
	superclass:'Uize.Widget.Collection.Dynamic',
	required:[
		'Uize.Node',
		'Uize.Widget.Collection.Dynamic',
		'Mintyfloss.ToDoItem'
	],
	builder:function (_superclass) {
		/*** Class Constructor ***/
			var
				_class = _superclass.subclass (
					null,
					function() {
						var _this = this;
						
						// Wire up the ToDoEditableField widgets
						_this.addChild('editLabel', Mintyfloss.ToDoEditableField);
						_this.addChild('editPriority', Mintyfloss.ToDoEditableField);
						_this.addChild('editCompletion', Mintyfloss.ToDoEditableField);
					}
				),
				_classPrototype = _class.prototype
			;

		/*** Public Instance Methods ***/
	
			// Adds ToDo item
			_classPrototype.addToDo = function(_label, _priority) {
				var
					_this = this,
					_validName = _label + '',
					_validPriority = _this.priorityValues[_priority]
				;
		
				if (!_validName) {
					_this.inform({
						message:'Please enter a valid Label'
					});
				} else if (!_validPriority) {
					_this.inform({
						message:'Please select a valid Priority'
					});
				} else {
					// valid name and priority
	
					var _today = new Date();
					var _itemProperties = {
						'label':_label,
						'date':_today.getMonth() + '/' + _today.getDate() + '/' + _today.getFullYear() +
							' ' + _today.getHours() + ':' + _today.getMinutes() + ':' + _today.getSeconds(),
						'priority':_priority,
						'completion':'no'	
					};
					
					// Add to Collection Dynamic widget
					_this.add({ properties:_itemProperties });
		
					// Store items
					_this.storeItems();
				}
			}
			
			// Sorts the ToDo List
			_classPrototype.sortToDo = function(_sortBy) {
				var _this = this;
			
				var _sortingToDo = function(_toDo1, _toDo2) {
					if (_this.sortTypes[_sortBy]) {
						var
							_value1 = _toDo1[_sortBy],
							_value2 = _toDo2[_sortBy]
						;	
						
						if (_sortBy == 'priority') {
							// we do not want to sort priority alphabettically
							// it should be high, normal, low
							_value1 = _this.priorityValues[_value1];
							_value2 = _this.priorityValues[_value2];

							return _value2 - _value1;
							
						} else {
							
							if (_value1 < _value2)
								return -1;
							else if (_value1 > _value2)
								return 1;
							else
								return 0;
						}					
					}
				}

				var _arrayToSort = _this.getPropertyForItems(null, _this.itemWidgets);		
				_arrayToSort.sort(_sortingToDo);
				
				// Store sorted array
				_this.storeTheseItems(_arrayToSort);
				
				// Fires event after sorting and storing
				_this.fire('Items Sorted');
			}
			
			// Populates the values of the priority dropdown input
			_classPrototype.populatePriority = function() {
				var
					_this = this,
					_priorityHtml = ''
				;
				
				for (var key in _this.priorityValues) {
					_priorityHtml += '<option>' + key + '<\/option>';
				}
				
				Uize.Node.setInnerHtml(_this.getNode('priority'), _priorityHtml);
			}
			
			// Loads the ToDo list from sessionStorage
			_classPrototype.loadItems = function() {
				var _this = this;
				
				// Retrieves the items from sessionStorage
				var _itemsFromStorage = sessionStorage.getItem('toDo') == 'undefined' || sessionStorage.getItem('toDo') == null || sessionStorage.getItem('toDo') == '' ?
					[] : JSON.parse(sessionStorage.getItem('toDo'));
				
				// Makes the list readable for collection widget by adding the key "properties"
				var _itemWidgetProperties = [];
				for (var i = 0; i < _itemsFromStorage.length; i++) {
					_itemWidgetProperties.push({ properties:_itemsFromStorage[i] });
				}

				_this.add(_itemWidgetProperties);
			}
			
			// Stores the ToDo list
			_classPrototype.storeItems = function() {		
				var _this = this;
				sessionStorage.setItem('toDo', JSON.stringify(_this.getPropertyForItems(null, _this.itemWidgets)));
			}
			
			// Stores specified list
			_classPrototype.storeTheseItems = function(array) {
				sessionStorage.setItem('toDo', JSON.stringify(array));
			}

			// Stores the Empty ToDo list
			_classPrototype.storeNoItems = function() {
				sessionStorage.setItem('toDo', '');
			}

			_classPrototype.wireUi = function() {
				var _this = this;

				if (!_this.isWired) {
					// Wires the "Add To-do" button
					_this.wireNode('submit', 'click', function() {
						_this.addToDo(_this.getNode('label').value, _this.getNode('priority').value);
					});
					
					// Wires the sort links
					_this.wireNode('sortLabel', 'click', function() { _this.sortToDo('label'); });
					_this.wireNode('sortDate', 'click', function() { _this.sortToDo('date'); });
					_this.wireNode('sortPriority', 'click', function() { _this.sortToDo('priority'); });
					_this.wireNode('sortCompletion', 'click', function() { _this.sortToDo('completion'); });
		
					// Saves to-do list when items are removed
					_this.wire('Items Removed', function(obj) {
						// set local storage
						if (obj.percentRemoved == 100) {
							_this.storeNoItems();
						} else {
							_this.storeItems();
						}
					});
		
					// Populates the priority dropdown
					_this.populatePriority();
					
					// Catches Save ToDo event and saves data
					_this.wire('Save ToDo', function() { _this.storeItems(); });
				
					// Calls wireUi in base class
					_superclass.prototype.wireUi.call(_this);
					
					// loads item in sessionStorage
					_this.loadItems();
				}
			};

		/*** Register Properties ***/
			_class.registerProperties ({
				priorityValues:{
					name:'priorityValues',
					value:{
						'low':1,
						'normal':2,
						'high':3
					}
				},
				sortTypes:{
					name:'sortTypes',
					value:{
						'label':1,
						'date':2,
						'priority':3,
						'completion':4
					}
				}
			});

		return _class;
	}
});