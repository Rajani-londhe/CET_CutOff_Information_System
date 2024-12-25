
// College dropdown elements
const collegeDropdown = document.getElementById('collegeDropdown'),
    collegeSelectBtn = collegeDropdown.querySelector('.select-btn'),
    collegeSearchInp = collegeDropdown.querySelector('input'),
    collegeOptions = collegeDropdown.querySelector('.options');

// Category dropdown elements
const categoryDropdown = document.getElementById('categoryDropdown'),
    categorySelectBtn = categoryDropdown.querySelector('.select-btn'),
    categorySearchInp = categoryDropdown.querySelector('input'),
    categoryOptions = categoryDropdown.querySelector('.options');

// University dropdown elements
const universityDropdown = document.getElementById('universityDropdown'),
    universitySelectBtn = universityDropdown.querySelector('.select-btn'),
    universitySearchInp = universityDropdown.querySelector('input'),
    universityOptions = universityDropdown.querySelector('.options');

 // Year dropdown elements
const yearDropdown = document.getElementById('yearDropdown'),
    yearSelectBtn = yearDropdown.querySelector('.select-btn'),
    yearSearchInp = yearDropdown.querySelector('input'),
    yearOptions = yearDropdown.querySelector('.options');

// Round dropdown elements
const roundDropdown = document.getElementById('roundDropdown'),
    roundSelectBtn = roundDropdown.querySelector('.select-btn'),
    roundSearchInp = roundDropdown.querySelector('input'),
    roundOptions = roundDropdown.querySelector('.options');


// Colleges array
let Colleges = [
"Sant Gadge Baba Amravati University,Amravati",
"Vidya Bharati Mahavidyalaya Department of Research and PG Studies in Science & Management, Amravati",
"Prof. Ram Meghe Institute of Technology & Research, Amravati",
"P. R. Pote (Patil) Education & Welfare Trust's Group of Institution(Integrated Campus), Amravati",
"Shree Hanuman Vyayam Prasark Mandal's P.G. Department of Computer Science & Technology, Amravati",
"Sadhana Shikshan Mandal, Saraswati College, Shegaon",
"Dr. B. A. M.University Dept. Of Management Science, Aurangabad",
"Dr. Babasaheb Ambedkar Marathwada Vidyapeeth,(Aurangabad) Sub Section - Osmanabad",
"Swami Ramanand Teerth Marathwada Vidyapeeth, Nanded",
"Government College of Engineering, Aurangabad",
"Rajarshi Shahu Institute of Management, Aurangabad",
"G. S. Mandal's Maharashtra Institute of Technology, Aurangabad",
"Sahyog Sevabhavi Santha's Indira Institute of Management Science, Nanded",
"Shree Sharda Bhavan Education Society's Institute of Technology & Management, Nanded",
"Dnyanopasak Shikshan Mandal's Institute of Information Technology & Management, Parbhani.",
"Maratha Education Society's Institute of Management studies & Information Technology, Aurangabad",
"M.S. Bidve Engineering College, Latur",
"Shri V. D. Deshmukh College of MCA, Kolpa Dist. Latur",
"Jay Bhavani Institute of Management, Badnapur, Jalna",
"Yashodeep Institute of Computer Application, MCA",
"Shri. Sambhaji College of Management & Technology, Degaon Road, Opp. Nadla Digras, Khadkut, Nanded",
"Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
"S.N.D.T Women's University P.G.D. of Computer Science, Mumbai",
"Dr. Babasaheb Ambedkar Technological University, Lonere",
"S.I.E.S. College of Management Studies, Mumbai",
"Gurunanak Institute of Management Studies, Mumbai",
"NCRD's Sterling Institute of Management Studies, Navi Mumbai",
"Bharti Vidyapeeth's Institute of Management & Information Technology, Navi Mumbai",
"Mumbai Education Trust's Institute of Computer Science, Bandra (W), Mumbai",
"Thakur Institute of Management Studies Career Development & Research, Kandivali (E), Mumbai",
"Late Bhausaheb Hiray S. S. Trust's Institute of Computer Application, Bandra (E), Mumbai",
"Deccan Education Society's Navinchandra Mehta Institute of Technology & Development, Dadar, Mumbai",
"Vivekanand Education Society's Institute of Technology, Chembur, Mumbai",
"Hope Foundation and research center's Finolex Academy of Management and Technology, Ratnagiri",
"Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology , Andheri, Mumbai",
"Late Shri. Vishnu Waman Thakur Charitable Trust, Viva Institute of Technology, Shirgaon",
"Aditya Institute of Management Studies & Research, Borivali",
"Inter Institutional Computer Center and Dept. of Computer Science & Electronics, RTM Nagpur University",
"Shri Ramdeobaba College of Engineering and Management, Nagpur",
"Amar Seva Mandal's Kamla Nehru Mahavidyalaya, Nagpur",
"Ranibai Agnihotri Institute of Computer Information Technology, Wardha",
"Sanmarg Shikshan Sanstha's Smt. Radhikatai Pandav College of Engineering, Nagpur",
"Jaidev Education Society, J D College of Engineering and Management, Nagpur",
"Ankush Shikshan Sanstha's G. H. Raisoni Institute of Engineering & Technology, Nagpur",
"Wainganga College of Engineering and Management, Dongargaon, Nagpur",
"K.D.K. College of Engineering, Nagpur",
"Vidarbha Bahu-Uddeshiya Shikshan Sanstha's Tulshiramji Gaikwad Patil College of Engineering & Technology, Nagpur",
"Shri Shivaji Education Society Amravati's Science College (MCA), Nagpur",
"Sarvodaya Shikshan Mandal's Sardar Patel Mahavidayalaya, Dept. of Computer Studies & Research, Chandrapur",
"V. M. Vasant Commerce, J.M. Thakar Arts & J.J. Patel Science College,Nagpur",
"Krushi Jivan Vikas Pratishthan, Ballarpur Institute of Technology, Mouza Bamni",
"Suryodaya College of Engineering & Technology, Nagpur",
"Department of Computer Science, North Maharashtra University, Jalgaon",
"Khandesh College Education Society's Institute of Management & Research, Jalgaon",
"Godavari Institute of Management & Research, Jalgaon",
"Shramsadhana Bombay Trust, College of Engineering & Technology, Jalgaon",
"B. P. Hivale Education Society's Institute of Management Studies Career Development Research, Ahmednagar",
"Padmashree Dr. Vithalrao Vikhe Patil Foundation's Institute of Business Management & Rural Development, Ahmednagar",
"Pirens Institute Of Business Management And Administration (IBMA) Loni (BK)",
"C.H.M.E. Society's Dr. Moonje Institute for Management & Computer Studies, Nashik",
"K. K. Wagh Institute of Engineering Education and Research, Nashik",
"R.C. Patel Educational Trust, Institute of Management Reasearch & Development, Shirpur",
"MET Bhujbal Knowledge City MET League's Engineering College, Adgaon, Nashik.",
"G. H. Raisoni Institute of Business Management,Jalgaon",
"West Khandesh Bhagini Seva Mandal's Dr. Suryakanta R. Ajmera M.C.A. College for Women, Dhule",
"Hindi Seva Mandal's Shri Sant Gadgebaba College of Engineering & Technology, Bhusawal",
"R. C. Patel Institute of Technology, Shirpur",
"Matoshri College of Engineering and Research Centre, Eklahare, Nashik",
"Gokhale Education Society's, R.H. Sapat College of Engineering, Management Studies and Research, Nashik",
"Akole Taluka Education Society,s Technical Campus, Akole, Ahmednagar",
"Dr. B.V. Hiray College of Management & Research Centre, Malegaon.",
"Shri Vile Parle Kelavani Mandal's Institute of Technology, Dhule",
"Shri Swami Samarth Institute of Management and Technology, Malwadi-Bota",
"Government College of Engineering, Karad",
"Yashwantrao Chavan School of Rural Development, Kolhapur",
"Punyashlok Ahilyadevi Holkar Solapur University, Solapur",
"Department of Computer Science, Savitribai Phule Pune University, Pune",
"Dr. D.Y. Patil Unitech Society's Dr. D. Y. Patil Institute of Management & Research, Pimpri",
"Shri. Khanderai Pratishthans Dnyansagar Institute of Management and Research, Balewadi, Pune",
"Jayawant Shikshan Prasarak Mandal's Jayawant Institute of Management Studies, Tathawade Pune-411033",
"Alard Institute of Management Sciences, Pune",
"Vidya Pratishthan Institute of Information Technology, Baramati, Pune",
"Genba Sopanrao Moze Trust Parvatibai Genba Moze College of Engineering,Wagholi, Pune",
"Progressive Education Society's Modern College of Engineering, Pune",
"Jaywant Shikshan Prasarak Mandal's,Rajarshi Shahu College of Engineering, Tathawade, Pune",
"Genba Sopanrao Moze College of Engineering, Baner-Balewadi, Pune",
"JSPM'S Jaywantrao Sawant College of Engineering,Pune",
"Zeal Education Society's Zeal Institute of Business Administration, Computer Application and Research, Pune",
"Institute of Industrial & Computer Management & Research, Nigdi, Pune",
"G.H.Raisoni College of Engineering & Management, Wagholi, Pune",
"Psd Shastri Educational Foundation's Asma Institute Of Management, Pune",
"Kamla Education Society's Pratibha Institute of Business Management, Chinchwad, Pune",
"Shikshan Maharshi Dr. D.Y. Patil Centre for Management & Research, Chikhali , Pune",
"Abhinav Education Society's Institute of Management and Research, Haveli, Pune",
"Pimpri Chinchwad Education Trust, Pimpri Chinchwad College of Engineering, Pune",
"Indira College of Engineering & Management, Pune",
"Dr. D. Y. Patil School Of MCA, Lohegaon,Pune",
"KIT's Institute of Management Education & Research, Kolhapur",
"Chh. Shahu Institute Of Business Edu And Res Vasantraodada Patil Institute Of Management Studies & Research, Sangli",
"KSGBS's Bharat- Ratna Indira Gandhi College of Engineering, Kegaon, Solapur",
"Shri Vithal Education and Research Institute's College of Engineering, Pandharpur",
"Dr. D. Y. Patil Pratishthan's D.Y.Patil Institute of Master of Computer Applications and Management, Akurdi, Pune",
"Sinhgad Technical Education Society's Sinhgad Institute of Management ,Vadgaon(Budruk),Pune",
"Maharashtra Education Society's Institute of Management and Career Courses (IMCC), Pune",
"Sinhgad Technical Education Society's , Sinhgad Institute of Business Administration & Research, Kondhawa-Saswad Road, Pune",
"Sinhgad Technical Education Society, Sinhgad Institute of Management & Computer Application, Narhe (Ambegaon), Pune",
"Choudhary Attar Singh Yadav Memorial Education Trust's Siddhant Institute Of Computer Application, Sudambare",
"KFS - Krishna Institute of Computer Application & Management, Wathar",
"Dr. J. J. Magdum Charitable Trust's Dr. J.J. Magdum College of Engineering, Jaysingpur",
"Suryadatta Educational Foundation, Suryadatta Institute of Management and Mass Communication, Pune",
"Suryadatta Educational Foundation, Suryadatta Institute of Business Management and Technology, Pune",
"Sadhu Vaswani Institute Of Management Studies For Girls, Koregaon, Pune",
"Dattakala Group Of Institutions, Swami - Chincholi Tal. Daund Dist. Pune",
"Navsahyadri Education Society's Group of Institutions",
"KJEI's Trinity Academy of Engineering, Yewalewadi, Pune",
"JSPM Narhe Technical Campus, Pune.",
"Yashoda Technical Campus, Wadhe, Satara.",
"Yashaswi Education Society's International Institute of Management Science, Chinchwad, Pune (Old Code MB3435)",
"Anantrao Pawar College of Engineering & Research, Pune",
"Progressive Education Society's Modern Institute of Business Studies, Nigdi, Pune",
"Dr.D.Y.Patil Institute Of Management & Entrepreneur Development,Talegaon",
"Chhatrapati Shahu Institute of Business Education & Research, Kolhapur",
"K.B. Joshi Institute of Information Technology, Pune",
"ASMS Institute of Business Management and Research MCA, Pune",
"Dr. D.Y. Patil Technical Campus, Varale, Talegaon, Pune",
"Pune Cambridge Institute of Management and Computer Application, Ambegaon Pathar, Pune",

];
// Categories array
let Categories = [
    "OPEN", "SC", "ST", "NT-A", "NT-B", "NT-C", "NT-D", "OBC", "EWS", "TFWS", "Minority", "OPEN-PWD", "OBC-PWD"
];
let Universities = [
    "Home University", "Other Than Home University", "State Level Seats"
];
let Years = [
    "2023", "2022"
];
let Rounds = [
    "CAP Round-1", "CAP Round-2", "CAP Round-3"
];

// Function to add colleges to the dropdown
function addCollege(selectedCollege) {
    collegeOptions.innerHTML = "";
    Colleges.forEach(college => {
        let isSelected = college == selectedCollege ? "selected" : "";
        let li = `<li onclick="updateCollegeName(this)" class="${isSelected}">${college}</li>`;
        collegeOptions.insertAdjacentHTML("beforeend", li);
    });
}
addCollege();

// Function to add categories to the dropdown
function addCategory(selectedCategory) {
    categoryOptions.innerHTML = "";
    Categories.forEach(category => {
        let isSelected = category == selectedCategory ? "selected" : "";
        let li = `<li onclick="updateCategoryName(this)" class="${isSelected}">${category}</li>`;
        categoryOptions.insertAdjacentHTML("beforeend", li);
    });
}
addCategory();

// Function to add university to the dropdown
function addUniversity(selectedUniversity) {
    universityOptions.innerHTML = "";
    Universities.forEach(university => {
        let isSelected = university == selectedUniversity ? "selected" : "";
        let li = `<li onclick="updateUniversityName(this)" class="${isSelected}">${university}</li>`;
        universityOptions.insertAdjacentHTML("beforeend", li);
    });
}
addUniversity();

// Function to add year to the dropdown
function addYear(selectedYear) {
    yearOptions.innerHTML = "";
    Years.forEach(year => {
        let isSelected = year == selectedYear ? "selected" : "";
        let li = `<li onclick="updateYearName(this)" class="${isSelected}">${year}</li>`;
        yearOptions.insertAdjacentHTML("beforeend", li);
    });
}
addYear();

// Function to add round to the dropdown
function addRound(selectedRound) {
    roundOptions.innerHTML = "";
    Rounds.forEach(round => {
        let isSelected = round == selectedRound ? "selected" : "";
        let li = `<li onclick="updateRoundName(this)" class="${isSelected}">${round}</li>`;
        roundOptions.insertAdjacentHTML("beforeend", li);
    });
}
addRound();



// Update Functions ------------>
// Function to update the selected college
function updateCollegeName(selectedLi) {
    collegeSearchInp.value = "";
    addCollege(selectedLi.innerText);
    collegeDropdown.classList.remove("active");
    collegeSelectBtn.firstElementChild.innerText = selectedLi.innerText;
}
// Function to update the selected category
function updateCategoryName(selectedLi) {
    categorySearchInp.value = "";
    addCategory(selectedLi.innerText);
    categoryDropdown.classList.remove("active");
    categorySelectBtn.firstElementChild.innerText = selectedLi.innerText;
}
// Function to update the selected university
function updateUniversityName(selectedLi) {
    universitySearchInp.value = "";
    addUniversity(selectedLi.innerText);
    universityDropdown.classList.remove("active");
    universitySelectBtn.firstElementChild.innerText = selectedLi.innerText;
}
// Function to update the selected year
function updateYearName(selectedLi) {
    yearSearchInp.value = "";
    addYear(selectedLi.innerText);
    yearDropdown.classList.remove("active");
    yearSelectBtn.firstElementChild.innerText = selectedLi.innerText;
}
// Function to update the selected round
function updateRoundName(selectedLi) {
    roundSearchInp.value = "";
    addRound(selectedLi.innerText);
    roundDropdown.classList.remove("active");
    roundSelectBtn.firstElementChild.innerText = selectedLi.innerText;
}




// Searching Event Listeners --------------->
// Event listener for searching colleges
collegeSearchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = collegeSearchInp.value.toLowerCase();
    arr = Colleges.filter(data => {
        return data.toLowerCase().includes(searchWord);
    }).map(data => {
        let isSelected = data == collegeSelectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateCollegeName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    collegeOptions.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! College not found</p>`;
});
// Event listener for searching categories
categorySearchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = categorySearchInp.value.toLowerCase();
    arr = Categories.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == categorySelectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateCategoryName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    categoryOptions.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Category not found</p>`;
});
// Event listener for searching universities
universitySearchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = universitySearchInp.value.toLowerCase();
    arr = Universities.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == universitySelectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateUniversityName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    universityOptions.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Candidate type not found</p>`;
});
// Event listener for searching years
yearSearchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = yearSearchInp.value.toLowerCase();
    arr = Years.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == yearSelectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateYearName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    yearOptions.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Year not found</p>`;
});
// Event listener for searching rounds
roundSearchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = roundSearchInp.value.toLowerCase();
    arr = Rounds.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == roundSelectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateRoundName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    roundOptions.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Round not found</p>`;
});



// Dropdown Event Listeners --------------->
// Event listener for toggling the college dropdown
collegeSelectBtn.addEventListener("click", () => collegeDropdown.classList.toggle("active"));
// Event listener for toggling the category dropdown
categorySelectBtn.addEventListener("click", () => categoryDropdown.classList.toggle("active"));
// Event listener for toggling the university dropdown
universitySelectBtn.addEventListener("click", () => universityDropdown.classList.toggle("active"));
// Event listener for toggling the years dropdown
yearSelectBtn.addEventListener("click", () => yearDropdown.classList.toggle("active"));
// Event listener for toggling the round dropdown
roundSelectBtn.addEventListener("click", () => roundDropdown.classList.toggle("active"));

// Form submission handling
const form = document.getElementById('searchForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const college = collegeSelectBtn.firstElementChild.innerText;
    const category = categorySelectBtn.firstElementChild.innerText;
    const university = universitySelectBtn.firstElementChild.innerText;
    const year = yearSelectBtn.firstElementChild.innerText;
    const round = roundSelectBtn.firstElementChild.innerText;

    const resultDiv = document.getElementById('result');
    
    const queryString = `?college=${encodeURIComponent(college)}&category=${encodeURIComponent
        (category)}&candidatetype=${encodeURIComponent(university)}&year=${encodeURIComponent
        (year)}&round=${encodeURIComponent(round)} `;
    window.location.href = form.action + queryString;
});
 
