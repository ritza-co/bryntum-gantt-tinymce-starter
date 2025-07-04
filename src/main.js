import { Gantt } from '@bryntum/gantt';
import 'src/lib/TinyMceField.js';

const gantt = new Gantt({
    appendTo : 'container',

    columns : [
        {
            text  : 'Name',
            field : 'name',
            width : 200
        },
        {
            text               : 'Description',
            field              : 'description',
            width              : 300,
            type               : 'template',
            template           : ({ value }) => value || '',
            autoHeight         : true,
            revertOnEscape     : false,
            managedCellEditing : false,
            cellEditor         : {
                matchSize : {
                    height : false
                }
            },
            editor : {
                type   : 'tinymcefield',
                inline : false,
                height : 400
            }
        },
        {
            text  : 'Start Date',
            field : 'startDate',
            type  : 'date',
            width : 120
        },
        {
            text  : 'Duration',
            field : 'duration',
            width : 80,
            align : 'right'
        },
        {
            text  : 'Progress',
            field : 'percentDone',
            type  : 'percent',
            width : 80
        }
    ],

    project : {
        transport : {
            load : {
                // url: 'tasksSimple.json',
                url : 'tasks.json'
            }
        },
        autoLoad : true
    },

    startDate : '2025-01-01',
    endDate   : '2025-02-15',

    viewPreset : 'weekAndMonth',

});