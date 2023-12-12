import { User } from "./data.js"
import { Rooms } from "./data.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navItems = $$('.nav_lis_items')
const pages = $$('.page')

const page1 = $('.page1_show_all')
console.log(page1);

navItems.forEach((nav, index)=>{
   nav.onclick = async function(){
     $(".nav_lis_items.active").classList.remove('active')
     this.classList.add('active')

     pages.forEach(page => {
      page.style.display = 'none'
     })
     pages[index].style.display = 'block'
      }
})

// ----page1
   const htmlPage1 = Rooms.map( (room, index) => {
      const user = User[index] || {};

      return `<ul class="page1_list_show">
         <li class="page1_list_show_items">${room.room}</li>
         <li class="page1_list_show_items">${room.name}</li>
         <li class="page1_list_show_items">${user.name}</li>
         <li class="page1_list_show_items">${room.quantity} / ${room.max_quantity}</li>
         <li class="page1_list_show_items">${room.start_Day}</li>
         <li class="page1_list_show_items">${room.end_Day}</li>
         <li class="page1_list_show_items">${user.phone}</li>
         <li class="page1_list_show_items">${user.email}</li>
         <li class="page1_list_show_items">${room.total}</li>
      </ul>`;
   }
)
   page1.innerHTML = htmlPage1.join('');

 // ----Page2
   const Page2Form = $('.page2_form')
   Page2Form.addEventListener('submit', function(e){
      e.preventDefault();

      // ---Input
      const room = $('#room').value;
      const roomName = $('#roomName').value;
      const userName = $('#userName').value;
      const SL = $('#SL').value;
      const dateStart = $('#dateStart').value;
      const dateEnd = $('#dateEnd').value;
      const phoneNumber = $('#phoneNumber').value;
      const email = $('#email').value;
      const total = $('#total').value;
  
      const newUser = {
        name: userName,
        email: email,
        phone: phoneNumber,
      }
   
      const newRoom = {
        room: room,
        name: roomName,
        quantity: SL,
        start_Day: dateStart,
        end_Day: dateEnd,
        total: total,
      }
   
      User.push(newUser)
      Rooms.push(newRoom)

      const newDataItem = document.createElement('div');
      newDataItem.innerHTML = `<ul class="page1_list_show">
            <li class="page1_list_show_items">${newRoom.room}</li>
            <li class="page1_list_show_items">${newRoom.name}</li>
            <li class="page1_list_show_items">${newUser.name}</li>
            <li class="page1_list_show_items">${newRoom.quantity} / 04</li>
            <li class="page1_list_show_items">${newRoom.start_Day}</li>
            <li class="page1_list_show_items">${newRoom.end_Day}</li>
            <li class="page1_list_show_items">${newUser.phone}</li>
            <li class="page1_list_show_items">${newUser.email}</li>
            <li class="page1_list_show_items">${newRoom.total}</li>
          </ul>`;

          page1.appendChild(newDataItem);

      Page2Form.reset();
})