const data = [
  {
    name: "John Doe",
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    // for image we use randomuser api for images of men and women.
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: "Jen Smith",
    age: 28,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    // for image we use randomuser api for images of men and women.
    image: 'https://randomuser.me/api/portraits/women/34.jpg'
  },
  {
    name: "William Johnson",
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    // for image we use randomuser api for images of men and women.
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name: "Lynda Miskerson",
    age: 30,
    gender: 'female',
    lookingfor: 'male',
    location: 'Orlando FL',
    // for image we use randomuser api for images of men and women.
    image: 'https://randomuser.me/api/portraits/women/80.jpg'
  }
];

// variables
const profiles = profileIterator(data);

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile(){
  // we get profile here
  const currentProfile = profiles.next().value;
  console.log(currentProfile);

  if(currentProfile !== undefined){
    // profile display
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    // image display
    document.getElementById('imageDisplay').innerHTML = `
      <img src = "${currentProfile.image}">
    `;
  } else {
    // no moer profiles
    window.location.reload();
  }
}

// profile iterator
function profileIterator(profiles){
  let nextIndex = 0;

  return {
    next: () => {
      if (nextIndex < profiles.length) {
        // nextIndex++ means 1 will be added after returning the index without adding.
        return { value: profiles[nextIndex++], done: false };
      }
      else {
        return { done: true };
      }
    }
  }
}