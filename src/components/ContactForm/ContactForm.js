export const ContactForm = () => {
    return (
        <div class="contact">
        <div class="contactText">
            
            <div class="redline"></div>
            
            <p class="contactHeader sectionHeader">Contact Us</p>
            <p class="contactPara sectionPara">Forms are a common implement so I thought it would be nice to include one here with a bit of styling</p>
        </div>

        <div class="contactForm">
            <form>
                <div class="inputOne input">
                    <label class="formLabel" for="">Name</label>
                    <input type="text" class="formInput"/>
                </div>
                <div class="inputOne input">
                    <label class="formLabel" for="">Email</label>
                    <input type="text" class="formInput"/>
                </div>
                <div class="inputOne input">
                    <label class="formLabel" for="">Message</label>
                    <textarea class="formMessage" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button class="btn">Submit</button>
            </form>
        </div>


    </div>
    )
}