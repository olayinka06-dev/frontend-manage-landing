import React from 'react'

const Swiper = () => {
  return (
    <section class="slider swiper h-[100vh] mt-10">
    <div class="slide-content">
        <div class="container w-full swiper-wrapper">
            <div class="card w-full text-center swiper-slide">
                <div class="flex flex-col items-center">
                    <img src="./images/avatar-anisha.png" alt=""/>
                </div>
                <div>
                    <h1>Anisha Li</h1>
                    <p class="paragraph">
                        “Manage has supercharged our team’s workflow. The ability to maintain 
                        visibility on larger milestones at all times keeps everyone motivated.”
                    </p>
                </div>
            </div>
            <div class="card swiper-slide">
                <div class="flex flex-col items-center">
                    <img src="./images/avatar-ali.png" alt=""/>
                </div>
                <div>
                    <h1>Ali Bravo</h1>
                    <p class="paragraph">
                        “We have been able to cancel so many other subscriptions since using 
                        Manage. There is no more cross-channel confusion and everyone is much 
                        more focused.”
                    </p>
                </div>
            </div>
            <div class="card swiper-slide">
                <div class="flex flex-col items-center">
                    <img src="./images/avatar-richard.png" alt=""/>
                </div>
                <div>
                    <h1>Richard Watts</h1>
                    <p class="paragraph">
                        “Manage allows us to provide structure and process. It keeps us organized 
                        and focused. I can’t stop recommending them to everyone I talk to!”
                    </p>
                </div>
            </div>
            <div class="card swiper-slide">
                <div class="flex flex-col items-center">
                    <img src="./images/avatar-shanai.png" alt=""/>
                </div>
                <div>
                    <h1>Shanai Gough</h1>
                    <p class="paragraph">
                        “Their software allows us to track, manage and collaborate on our projects 
                        from anywhere. It keeps the whole team in-sync without being intrusive.”
                    </p>
                </div>
            </div>
        </div>
    </div>
</section> 
  )
}

export default Swiper