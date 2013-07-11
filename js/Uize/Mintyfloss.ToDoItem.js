Uize.module ({
	name:'Mintyfloss.ToDoItem',
	superclass:'Uize.Widget.CollectionItem',
	required:[
		'Uize.Widget',
		'Mintyfloss.ToDoEditableField'
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

		/*** Public Properties ***/		
			_classPrototype.wireUi = function() {
				var _this = this;

				if (!_this.isWired) {
					var
						_editLabel = _this.children.editLabel,
						_editPriority = _this.children.editPriority,
						_editCompletion = _this.children.editCompletion
					;

					// Sets value for editLabel widget and wires event handling
					_editLabel.set('value', _this.label);
					_editLabel.wire(
						'Changed.value',
						function() {
							_this.get('properties')['label'] = _editLabel.value;
							_this.fire({name:'Save ToDo', bubble:true});
						}
					);

					// Sets value for editPriority widget and wires event handling		
					_editPriority.set('value', _this.priority);
					_editPriority.wire(
						'Changed.value',
						function() {
							_this.get('properties')['priority'] = _editPriority.value;
							_this.fire({name:'Save ToDo', bubble:true});
						}
					);

					// Sets value for editCompletion widget and wires event handling			
					_editCompletion.set('value', _this.completion);
					_editCompletion.wire(
						'Changed.value',
						function() {
							_this.get('properties')['completion'] = _editCompletion.value;
							_this.fire({name:'Save ToDo', bubble:true});
						}
					);
				
					_superclass.prototype.wireUi.call(_this);
				}
			};

		return _class;
	}
});