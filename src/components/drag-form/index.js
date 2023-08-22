
var component_buttons = document.querySelectorAll(".col-sortable");
component_buttons.forEach(each=>{
    new Sortable(each, {
        group: {
            name: 'drag-form',
            pull: 'clone',
            put: false // Do not allow items to be put into this list
        },
        // draggable:'.btn-carota',
        // handle:'.btn-carota',
        animation: 150,
        sort: false, // To disable sorting: set sort to false,
        onEnd:function (event){
            console.log('end开始')
            console.log(event)
            console.log(event.target)
            console.log(event.to)
            console.log('end结束')
        },
    });
})

var design_panel = document.getElementById('design-panel-sortable')
console.log(design_panel)

    new Sortable(design_panel, {
        group: {
            name: 'drag-form',
        },
        // draggable:'.btn-carota',
        // handle:'.btn-carota',
        animation: 150,
        onSort: function (event) {
            console.log(event)
            console.log(event.item)
            // same properties as onEnd
        },
        // direction:function (event,target,dragEL){
        //     console.log('direction2开始')
        //     console.log(event)
        //     console.log(target)
        //     console.log(dragEL)
        //     console.log('direction2结束')
        // }
    });
