const stateSelect = document.getElementById('stateSelect');
const districtSelect = document.getElementById('districtSelect');

// Define the data of states and districts
const stateDistricts = {
    "Maharashtra": ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur",
    "Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban",
    "Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli",
    "Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"]
    // Add other states and districts similarly
};

// Function to populate districts based on selected state
function populateDistricts() {
    const selectedState = stateSelect.value;
    const districts = stateDistricts[selectedState];

    // Clear existing options
    districtSelect.innerHTML = '<option value="">Select District</option>';

    // Populate districts if available
    if (districts) {
        districts.forEach(district => {
            const option = document.createElement('option');
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Populate states initially
for (const state in stateDistricts) {
    const option = document.createElement('option');
    option.textContent = state;
    stateSelect.appendChild(option);
}
/*const stateSelect = document.getElementById('stateSelect');
const districtSelect = document.getElementById('districtSelect');

// Define the data of states and districts
const stateDistricts = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
    // Add other states and districts similarly
};

// Function to populate districts based on selected state
function populateDistricts() {
    const selectedState = stateSelect.value;
    const districts = stateDistricts[selectedState];

    // Clear existing options
    districtSelect.innerHTML = '<option value="">Select District</option>';

    // Populate districts if available
    if (districts) {
        districts.forEach(district => {
            const option = document.createElement('option');
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Populate states initially
for (const state in stateDistricts) {
    const option = document.createElement('option');
    option.textContent = state;
    stateSelect.appendChild(option);
}

*/