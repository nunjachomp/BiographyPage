const cityMaps = document.querySelector(".gallery-img");

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const cityiFrames = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344469.43702784425!2d-118.7413987224146!3d34.020608445163745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e1!3m2!1sen!2sil!4v1683541779937!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87766.17282383918!2d-117.1398047626493!3d32.3596155218439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9313f72cece1b%3A0x7a0ec61c8d78d247!2sRosarito%2C%20Baja%20California%2C%20Mexico!5e1!3m2!1sen!2sil!4v1683542512189!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313636.3290608635!2d28.682520118423493!3d41.00537020089666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e1!3m2!1sen!2sil!4v1683542153337!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5633.3356237845355!2d35.01762118929496!3d29.831917207301505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150045237ddd9bad%3A0x56f2ccd5742de632!2sSamar!5e1!3m2!1sen!2sil!4v1683652631965!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.1888417718774!2d35.233417774584616!3d31.778120634364257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329c91f33ffdb%3A0x6d2bbd5ce62d60ab!2sTemple%20Mount!5e1!3m2!1sen!2sil!4v1683541717921!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.811791004597!2d-117.74964862529414!3d34.28325340549878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c322cfd9f1704f%3A0xd04401dc1101aa9c!2sBridge%20to%20Nowhere!5e1!3m2!1sen!2sil!4v1683541518382!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45323.77959841418!2d-21.98908742298697!3d64.13713654708151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674b9eedcedc3%3A0xec912ca230d26071!2sReykjav%C3%ADk%2C%20Iceland!5e1!3m2!1sen!2sil!4v1683541634957!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.1464319237302!2d-74.01386879042828!3d40.71236441423366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2sOne%20World%20Trade%20Center!5e1!3m2!1sen!2sil!4v1683541845144!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619155.859265485!2d11.855458129389344!3d41.85094337537991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a111bd74ac3%3A0x3094f9ab2388100!2sMetropolitan%20City%20of%20Rome%20Capital%2C%20Italy!5e1!3m2!1sen!2sil!4v1683543717335!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158160.38270460084!2d-3.8443491500525604!3d40.43809861123871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e1!3m2!1sen!2sil!4v1683542064955!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d335980.98605117766!2d-112.4384256!3d36.0589204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8733109223baa311%3A0xfcf727be530a5f7c!2sGrand%20Canyon%20Visitor%20Ctr%2C%20Grand%20Canyon%20Village%2C%20AZ%2086023%2C%20USA!5e1!3m2!1sen!2sil!4v1683652499674!5m2!1sen!2si",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10859.049116923707!2d35.76182224233834!3d33.26911311634455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151eb7ba0aca30d1%3A0xd6ccba06aeebb48d!2sMajdal%20Shams!5e1!3m2!1sen!2sil!4v1683541944862!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.0934032570153!2d12.490353349471027!3d41.89018221736869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e1!3m2!1sen!2sil!4v1683542018683!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9554.911054851906!2d11.665196513328024!3d42.634463799304775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13291f3d60ef4297%3A0x33955514899ac30!2s58017%20Pitigliano%2C%20Province%20of%20Grosseto%2C%20Italy!5e1!3m2!1sen!2sil!4v1683652743637!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.522216840867!2d-95.1009153825347!3d29.552107247015975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409d00c061992d%3A0x13f0aac92fd5f916!2sSpace%20Center%20Houston!5e1!3m2!1sen!2sil!4v1683541889430!5m2!1sen!2sil"    
]

let currentlySelected = 0
document.querySelector("iframe").setAttribute("src",cityiFrames[0]);


function disableAppropriateButtons() {
    if (currentlySelected < 1) {
        prevButton.disabled = true
        nextButton.disabled = false;
    } else if (currentlySelected > 0 && currentlySelected < cityiFrames.length - 1){
        prevButton.disabled = false
        nextButton.disabled = false;
    } else if (currentlySelected > cityiFrames.length - 2){
        prevButton.disabled = false
        nextButton.disabled = true;
    }
}

disableAppropriateButtons();


prevButton.addEventListener('click', function() {
    if (currentlySelected > 0) {
        currentlySelected--;
        document.querySelector("iframe").setAttribute("src",cityiFrames[currentlySelected]);
    }
    disableAppropriateButtons();
});

nextButton.addEventListener('click', function() {
     if (currentlySelected < cityiFrames.length - 1) {
        currentlySelected++;
        document.querySelector("iframe").setAttribute("src",cityiFrames[currentlySelected]);
    }
    disableAppropriateButtons();
});