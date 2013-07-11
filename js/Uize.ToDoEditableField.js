Uize.module ({
	name:'Mintyfloss.ToDoEditableField',
	superclass:'Uize.Widget',
	required:'Uize.Node.Classes',
	builder:function (_superclass) {
		/*** Class Constructor ***/
			var
				_class = _superclass.subclass (
					null,
					function() {
						var _this = this;

					}
				),
				_classPrototype = _class.prototype
			;

		/*** Public Properties ***/		
			_classPrototype.wireUi = function() {
				var
					_this = this
				;

				if (!_this.isWired) {
								
					_this.wireNode('input',	{
						blur:function() {
							if (_this.getNode('input').value != _this.value) {
								_this.set('value', _this.getNode('input').value);
								Uize.Node.Classes.addClass(_this.getNode('input'), 'saved');
							}
						}
					});

					_superclass.prototype.wireUi.call(_this);
				}
			};

		/*** Register Properties ***/
			_class.registerProperties ({
				value:'value'
			});

		return _class;
	}
});