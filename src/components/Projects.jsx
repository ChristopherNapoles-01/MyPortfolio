import Newsletter from '../assets/projects/newsletter.png';
import Nlogin from '../assets/projects/nlogin.png';
import Enc from '../assets/projects/stega1.png';
import Dec from '../assets/projects/stega2.png';
import Pos from '../assets/projects/pos.png';
import Dashboard from '../assets/projects/dashboard.png';
import BookHome from '../assets/projects/bookhome.png';
import BookPage from '../assets/projects/bookpage.png';
import MarvelHome from '../assets/projects/marvelHome.png';
import CharacterPage from '../assets/projects/character.png';
import Facebook from '../assets/projects/fb.png';
import Git from '../assets/projects/git.png';
import Gmail from '../assets/projects/gmail.png';
import Linkedin from '../assets/projects/linkin.png';
import Phone from '../assets/projects/phone.png'

   export const projects = [
        {
         name:'TUP Newsletter Web Application',
         description:'TUP Newsletter Web Application is a Project study for the Technological University of the Philippines-Manila',
         img:[Newsletter,Nlogin],
         details:'The TUP Newsletter Web Application is made from the MERN Stack with react Redux. Its purpose is to give the TUP-Manila Community a Newsletter were students can easily access news and information from every school organizations and departments',
         github:'',
         link: 'https://tupnewsletter.com/'
        },
        {
            name:'Steganography',
            description:'This is a Steganography Project',
            img:[Enc,Dec],
            details:'This Steganography Project hides an encrypted word in an image. It is made from HTML, CSS, and Javascript and utilizes the steganography.js library and the encryption method used is created by yours truly.',
            github:'https://github.com/ChristopherNapoles-01/Steganography',
            link: 'https://christophernapoles-01.github.io/Steganography/'
        },
        {
            name:'PC-Hive Inventory Management System',
            description:'PC-Hive Inventory Management System is an inventory management system that has integrated Point of Sale System.',
            img:[Dashboard,Pos],
            details:'PC-Hive is made from PHP,ajax,JQUERY,Bootstrap CSS and Javascript. It is an Inventory Management system with built in Point of sale system that can monitor live changes on items stock status and sales status.If you are going to check it use this account: email:sample@gmail.com password:s@mple',
            github:'',
            link: 'https://ite4-bsit-ab.com/bsit4a/NGFW/index.php'
        },
        {
            name:'Book Worm',
            description:'Book Worm, a Book Finder App',
            img:[BookHome,BookPage],
            details:'The Book Worm web app is a book finder app that is made with react JS using google books api and bootstrap css',
            github:'https://github.com/ChristopherNapoles-01/book-finder',
            link: 'https://christophernapoles-01.github.io/book/PXa2bby0oQ0C'
        },
        {
            name:'Marvel Guide Site',
            description:'A Marvel Hero Guide Site',
            img:[MarvelHome,CharacterPage],
            details:'The Book Worm web app is a Marvel hero guide app that is made with react JS using Marvel api and bootstrap css',
            github:'https://github.com/ChristopherNapoles-01/marvel',
            link: 'https://christophernapoles-01.github.io/marvel/'
        },
    ]
    export const channels = [
        {
            label:'facebook',
            img:Facebook,
            details:'https://www.facebook.com/profile.php?id=100078784126598'
        },
        {
            label:'github',
            img:Git,
            details:'ChristopherNapoles-01'
        },
        {
            label:'linkedin',
            img:Linkedin,
            details:'www.linkedin.com/in/christopher-napoles-117821203'
        },
        {
            label:'email',
            img:Gmail,
            details:'christophernapoles35@gmail.com'
        },
        {
            label:'phone',
            img:Phone,
            details:'09683443990'
        },
    ]

