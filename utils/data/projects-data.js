import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Budegting and Finance App',
        description: "This app is designed to help users efficiently manage their finances by tracking daily expenses, income, loans, and personal financial goals. With its intuitive interface, users can easily record their spending, monitor income sources, manage loan details, and set and track progress toward financial goals. The app provides a comprehensive view of one's financial health, helping users make informed decisions and maintain financial stability..",
        tools: ['Express', 'MongoDB', 'Gemini API', 'AWS SES', 'Node js', 'React','Mongoose'],
        role: 'Full stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Nurse Schedule Manager',
        description: 'The Nurse Schedule Manager app is designed to streamline the scheduling process for nursing staff. It automatically generates personalized schedules for nurses and displays them conveniently on the apps home page. This user-friendly tool helps nurses easily keep track of their shifts, duties, and assignments, ensuring they stay organized and can provide optimal patient care. With real-time updates and an intuitive interface, the Nurse Schedule Manager enhances efficiency and communication within healthcare facilities.',
        tools: ['NextJS', 'Bootstrap', "PHP", "Xampp", "MySQL", "Gmail Passkey"],
        role: 'Frontend developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },