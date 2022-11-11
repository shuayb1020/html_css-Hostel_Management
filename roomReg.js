function configureDropDownLists(block, room) {
    var university = ['Room 1', 'Room 2', 'Room 3','Room 4','Room 5','Room 6','Room 7','Room 8','Room 9','Room 10','Room 11','Room 12','Room 13','Room 14','Room 15','Room 16','Room 17','Room 18','Room 19','Room 20','Room 21','Room 22','Room 23','Room 24'];
    var salem = ['Room 1', 'Room 2', 'Room 3','Room 4','Room 5','Room 6','Room 7','Room 8','Room 9','Room 10','Room 11','Room 12','Room 13','Room 14','Room 15','Room 16'];

    if (block.value === 'Male University Hostel' || block.value === 'Female University Hostel'){
        room.options.length = 0;
        for (i = 0; i < university.length; i++) {
            createOption(room, university[i], university[i]);
        }
    }else if(block.value === 'Block A'|| block.value === 'Block B'|| block.value === 'Block C' || block.value === 'Block D'|| block.value === 'Block E' || block.value === 'Block F'){
        room.options.length = 0;
        for (i = 0; i < salem.length; i++) {
            createOption(room, salem[i], salem[i]);
        }

    }
}

function createOption(list, text, value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    list.options.add(opt);
    }














































// var BlockList = document.getElementById("block");
        
// BlockList.options[0] = new Option('...Select...','');
// BlockList.options[1] = new Option('Male University Hostel','male university hostel');
// BlockList.options[2] = new Option('Female University Hostel','female university hostel');
// BlockList.options[3] = new Option('Block A','blockA');
// function getHostel(){
//     var BlockList = document.getElementById('block');
//     var RoomList = document.getElementById('room');
//     // extract value from the dropdown of block
//     var BlockSelectedValue = BlockList.options[BlockList.selectedIndex].value;

//     // condition to check the selected value from block dropdown

//     if (BlockSelectedValue === 'Male University Hostel' ){
//         // clear room list before adding value to it each time
//         RoomList.options.length = 0;
//         RoomList.options[0] = new Option('...Select...','');
//         RoomList.options[1] = new Option('Room 1', 'R1');
//         RoomList.options[2] = new Option('Room 2', 'R2');
//         RoomList.options[3] = new Option('Room 3', 'R3');
//         RoomList.options[4] = new Option('Room 4', 'R4');
//         RoomList.options[5] = new Option('Room 5', 'R5');

//     } else if(BlockSelectedValue ==='Block A'){
//         RoomList.options.length = 0;
//         RoomList.options[0] = new Option('--select--', '');
//         RoomList.options[1] = new Option('Room 1', 'R1');
//         RoomList.options[2] = new Option('Room 2', 'R2');
//         RoomList.options[3] = new Option('Room 3', 'R3');

//     }
// }