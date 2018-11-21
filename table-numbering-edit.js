(function() {
    "use strict";
 
    var TABLEFIELD = 'Table'; // Field code of the table
    var NUMBERFIELD = 'Number'; // Field code of number field in the table
 
    // Disable number fields in table at these events
    var disableEvents = [
        'app.record.edit.show',
        'app.record.create.show',
        'app.record.edit.change.' + TABLEFIELD,
        'app.record.create.change.' + TABLEFIELD
    ];
    
    kintone.events.on(disableEvents, function(event){
        var record = event.record;
        
        // Disable number fields in table rows
        var count = record[TABLEFIELD].value.length;
        for (var i = 0; i < count; i++) {
            record[TABLEFIELD].value[i].value[NUMBERFIELD]['disabled'] = true;
        };
        
        return event;
    });

    // Number table rows at these events
    var numberEvents = [
        'app.record.create.submit',
        'app.record.edit.submit'
    ];

    kintone.events.on(numberEvents, function(event) {
        var record = event.record;

        // Auto-number the table rows
        var count = record[TABLEFIELD].value.length;
        for (var i = 0; i < count; i++) {
            record[TABLEFIELD].value[i].value[NUMBERFIELD].value = i + 1;
        }

        return event;
    });
})();
