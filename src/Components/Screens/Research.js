import React from 'react';

const Research = () => {
    return (
        <div>
            <div className="items-center flex flex-col h-full w-full">
                <div className="text-xl dark:text-white text-black font-black">Research Work</div>
                <div className="flex mx-7 my-3">
                    <ul className="list-none">
                        <li className="text-md font-medium dark:text-white text-black my-2">Worked at Jadavapur University CMATER (DVLP) Lab and was involved in making classification and segmentation models for the task of scene text detection. Also worked on making of the  <a className="border-b-2 border-black dark:border-white" href="https://dvlp.herokuapp.com/">Lab website</a></li>
                        <li className="text-md font-medium dark:text-white text-black my-2">Worked under Prof. Biplab Banerjee of Indian Institute of Technology, Bombay to develop models for screening of covid affected patients from Chest-Xray images. Many appraches were experimented upon including an adversarial approach involving domain adaptation.</li>
                    </ul>
                </div>
                <div className="text-xl dark:text-white text-black font-black">Publications and Blogs</div>
                <div className="flex mx-7 my-3">
                    <ul className="list-decimal">
                        <li className="text-md font-medium dark:text-white text-black my-2">Accepted at CICBA international conference - Exploring Knowledge Distillation of a Deep Neural Network for Multi-Script identification . <a className="border-b-2 border-black dark:border-white" href="https://arxiv.org/abs/2102.10335">[Link]</a> . <a className="border-b-2 border-black dark:border-white" href="https://drive.google.com/file/d/1ReOFt0V73ASUDIk02pL1ubYUb_duEVgH/view?usp=sharing">[Certificate]</a> </li>
                        <li className="text-md font-medium dark:text-white text-black my-2">Image processing with OpenCV published in medium publication - Towards AI. <a className="border-b-2 border-black dark:border-white" href="https://pub.towardsai.net/image-processing-basics-through-opencv-e9cbc6130821">[Link]</a></li>
                        <li className="text-md font-medium dark:text-white text-black my-2">Spring Boot web application and making a docker container and dockerizing it in medium publication - Geek Culture. <a className="border-b-2 border-black dark:border-white" href="https://medium.com/geekculture/a-full-stack-e-commerce-application-using-spring-boot-and-making-a-docker-container-eff46f6f4e14">[Link]</a></li>
                        <li className="text-md font-medium dark:text-white text-black my-2">A React frontend for a spring boot application in medium publication - Geek Culture. <a className="border-b-2 border-black dark:border-white" href="https://medium.com/geekculture/a-reactjs-web-application-with-a-spring-boot-backend-and-containerizing-it-using-docker-3eeaed8cb45a">[Link]</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Research;