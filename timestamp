(function () {
    'use strict';
    
    var TIMESTAMP_FIELD = 'Timestamp'; // Field code of Datetime field
    var STATUS_NAME = 'Completed'; // Name of status
    
    var events = [
        'app.record.detail.process.proceed',
        'mobile.app.record.detail.process.proceed'
    ];
    
    // When process management is changed do the following
    kintone.events.on(events, function(event) {
        var currenttime = new Date(); // Get current datetime
        var timestamp = currenttime.toISOString(); // Change date object to ISO string
        var record = event.record; 
        var status = event.nextStatus.value;
    
        // Insert current datetime into timestamp datetime field if status is 'Completed'
        if (status === STATUS_NAME) {
            record[TIMESTAMP_FIELD]['value'] = timestamp;
        };
        
        return event;
    })
})();
