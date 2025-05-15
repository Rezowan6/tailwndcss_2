/*~~~~~~~ TOGGLE BUTTON~~~~~~~*/
const nav_menu = document.getElementById('nav_menu');

const nav_link = document.querySelectorAll('.nav_link');

const hamburger = document.getElementById('hamburger');


hamburger.addEventListener('click',()=>{
    nav_menu.classList.toggle('left-[0]')
    hamburger.classList.toggle('ri-close-large-line')
    nav_menu.classList.toggle("backdrop-blur-sm")

});
// console.log(hamburger)

nav_link.forEach(link =>{
    link.addEventListener('click',()=>{
        nav_menu.classList.toggle('left-[0]')
        hamburger.classList.toggle('ri-close-large-line')
    })
})


/*~~~~~~~ Swiper Init ~~~~~~~*/

 document.addEventListener("DOMContentLoaded", function () {
      const swiper = new Swiper('.reviewSwiper', {
        speed: 400,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        grabCursor: true,
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });
    });

    /*~~~~~~~  Define form field configuration ~~~~~~~*/
    const fields = [
      { label: "First Name", name: "firstName", required: true },
      { label: "Last Name", name: "lastName", required: true },
      { label: "Company Name", name: "companyName", required: true },
      { label: "Job Title", name: "jobTitle", required: true },
      { label: "Company Email", name: "email", type: "email", required: true },
      { label: "Company Size", name: "companySize" },
      { label: "Company HQ Country", name: "hqCountry", required: true },
      { label: "Phone Number", name: "phone", type: "tel", required: true },
    ];

    const container = document.getElementById('formContainer');
    // headline
    const header = document.createElement('h2');
    header.className = 'text-2xl lg:text-4xl font-semibold text-center mb-2';
    header.innerText = 'See Beyond.';
    // sub text
    const subtitle = document.createElement('p');
    subtitle.className = 'text-center lg:text-xl mb-10';
    subtitle.innerText = 'Experience CybelAngel Xtended External Attack Surface Management.';
    // from create
    const form = document.createElement('form');
    form.className = 'space-y-6';
    form.id = 'trialForm';
    // div 1
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4';

    // Create input fields
    fields.forEach(field => {
      const wrapper = document.createElement('div'); /* div 2 create */
      const label = document.createElement('label'); /* label create */
      label.className = 'block text-sm mb-1';
      label.innerHTML = field.label + (field.required ? ' <span class="text-red-500">*</span>' : '');

      const input = document.createElement('input'); /* input create */
      input.className = 'w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none';
      input.type = field.type || 'text';
      input.name = field.name;
      if (field.required) input.required = true;

      wrapper.appendChild(label);
      wrapper.appendChild(input);
      grid.appendChild(wrapper);
    });

    // Comments section
    const commentWrapper = document.createElement('div');
    const commentLabel = document.createElement('label');
    commentLabel.className = 'block text-sm mb-1';
    commentLabel.innerText = 'Questions/Comments';

    const textarea = document.createElement('textarea');/* textarea create */
    textarea.name = 'comments';
    textarea.rows = 4;
    textarea.placeholder = 'Leave us a message...';
    textarea.className = 'w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none';

    commentWrapper.appendChild(commentLabel);
    commentWrapper.appendChild(textarea);

    // Submit button
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'flex flex-col justify-center';

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn';
    button.innerText = 'Request Your Trial';

    buttonWrapper.appendChild(button);

    // Footer note
    const footerNote = document.createElement('p');
    footerNote.className = 'text-xs text-center mt-6 text-white/70';
    footerNote.innerText = 'CybelAngel is committed to your privacy. We use the information you provide us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, please refer to our Legal Mentions page.';

    // Assemble form
    form.appendChild(grid);
    form.appendChild(commentWrapper);
    form.appendChild(buttonWrapper);

    // Append everything to container
    container.appendChild(header);
    container.appendChild(subtitle);
    container.appendChild(form);
    container.appendChild(footerNote);

    // Add form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Trial request submitted!');
      form.reset();
    });


    /*~~~~~~~ footer section ~~~~~~~*/
    /* footerList  */
      const footers = [
      "Banking & Finance",
      "Manufacturing",
      "Retail",
      "IT & Consulting",
      "Telco/Mobile",
      "Asset Discovery",
      "Data Breech Prevention",
      "Dark Web Monitoring",
      "Data Breech Prevention",
      "Domain Protection",
      { Prevention: "Account Takeover" }
    ];

    const footerList = document.getElementById("footerList");

    footers.forEach(item =>{
      const li = document.createElement("li");
      /* check if item is an obj or string */
      if(typeof item ==="string"){
        li.textContent = item;
        li.className = "lg:pt-2";
      }else if(typeof item === "object"){
        for(key in item){
          li.textContent = `${key} ${item[key]}`;
          li.classList = "lg:pt-2"
        }
      }
      footerList.appendChild(li)
    })

    /* footerList1  */

    const footers1 = [
      "Supply Chian Risks",
      "Ransomware Prevention",
      "Data Leaks",
      "Exposed Credentials",
      "Cloud Migration",
      "Explore the Platform",
    ];

    const footerList1 = document.getElementById("footerList1");

    footers1.forEach(item => {
      const li = document.createElement("li");
       /* check if item is an string */
       if(typeof item === "string"){
        li.textContent = item;
        li.className = "lg:pt-2";
       }
       footerList1.appendChild(li);
    })

    /* footerList2  */

    const footers2 = [
      "Resource Center",
      "Whitepapers & Guides",
      "Ecplore by Topic",
      "Webinars",
      "Case Studies",
      "Events",
    ];

    const footerList2 = document.getElementById("footerList2");

    footers2.forEach(item => {
      const li = document.createElement("li");
      /* check if item is an string */
      if(typeof item === "string"){
        li.textContent = item;
        li.className = "lg:pt-2";
      }
      footerList2.appendChild(li)
    })

    /* footerList3  */
    const footers3 = [
      " Privacy Notice for California",
      "Residents",
      "Contact Us",
      "Login",
      "Support",
      "Gartner 5 Star Insights",
      "Press Release",
      "Request a Demo",
      "Partner With Us",
    ];

    const footerList3 = document.getElementById("footerList3");

    footers3.forEach(item => {
      const li = document.createElement("li");

      if(typeof item === "string"){
        li.textContent = item;
        li.className = "lg:pt-2";
      }

      footerList3.appendChild(li)
    })

