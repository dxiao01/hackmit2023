Despite falls claiming over 36,000 lives in 2020 alone, existing strategies to assist elderly fall victims are too slow and expensive. By automating fall detection, our project aims to save lives.

## 💡Inspiration and Purpose

Our group members are from all around the U.S., from Dallas to Boston, but one thing that we have in common is that we have a grandparent living by themselves. Due to various family situations, we have elderly loved ones who spend a few hours alone each day, putting them at risk of a fatal accident like a fall. After researching current commercial solutions for fall detection, devices can range from anywhere from twenty-four to fifty dollars per device monthly. While this is affordable for our families, it is distinctly out of reach for many disadvantaged families. 

In 2020, falls among Americans 65 and older caused over 36,000 deaths - the leading cause of injury death for that demographic group. Furthermore, these falls led to some three million emergency hospital visits and $50 billion in medical costs, creating an immense strain on our healthcare system. 

## 🎖️ What It Does

Despite these sobering statistics, very few accessible solutions exist to assist seniors who may experience a fall at home. More worryingly, many of these products rely on the individual who has just become seriously injured to report the incident and direct emergency medical services to their location. Oftentimes, someone might not be able to alert the proper authorities and suffer needlessly as a result. 

Guardian Angel aims to solve this growing problem by automating the process of fall detection using machine learning and deploying it in an easy-to-use, accurate, and portable system. From there, the necessary authorities can be notified, even if an individual is critically injured.  

By using data-based trackers such as position, this application will adequately calculate and determine if a person has fallen based on a point and confidence system. This can be used for risk prevention profiles as it can detect shuffling or skipping. The application will shine red if it is confident that the person has fallen and it is not a false positive. 

## 🧠 Development and Challenges

The application overall was built using React, alongside TailwindCSS and ML5. Using the create-react-app boilerplate, we were able to minimize the initial setup and invest more time in fixing bugs. In general, the website works by obtaining the model, metadata, and weights from the tensorflow.js model, requests a webcam input, and then pushes that webcam input into the machine learning model. The result of the model, as well as the confidence, is then displayed to the user.

The machine learning side of the project was developed using TensorFlow through tensorflow.js. As a result, we were able to primarily focus on gathering proper samples for the model, rather than optimization. The samples used for training were gathered by capturing dozens of videos of people falling in various backgrounds, isolating the frames, and manually labeling the data. We also augmented the samples to improve the model's ability to generalize.

For training, we used around 5 epochs, a learning rate of 0.01, and a batch size of 16. Other than that, every other parameter was default.

We also ran into a few major challenges during the creation of the project. Firstly, the complexity of detecting movement made obtaining samples and training particularly difficult. Our solution was to gather a number of samples from different orientations, allowing for the model to be accurate in a wide variety of situations. Specifically speaking for the website, one of the main challenges we ran implementing video rendering within React. We were eventually able to implement our desired functionality using HTML videos, uncommon react dependency components, and complex Tensorflow-React interactions. 

## 🎖️ Accomplishments that we're proud of

First and foremost, we are proud of successfully completing the project while getting to meet with several mentors and knowledgeable professionals, such as the great teams at CareYaya and Y Combinator.

Second, we are proud of our model's accuracy. Classifying a series of images with movement was no small undertaking, particularly because we needed to ignore unintentional movements while continuing to accurately identify sudden changes in motion.

Lastly, we are very proud of the usability and functionality of our application. Despite being a very complex undertaking, our front end wraps up our product into an incredibly easy-to-use platform that is highly intuitive. We hope that this project, with minimal modifications, could be deployed commercially and begin to make a difference.

## 🔜 Next Steps 

We would soon like to integrate our app with smart devices such as Amazon Alexa and Apple Smart Watch to obtain more data and verify our predictions. With accessible devices like Alexa already on the market, we will continue to ensure this service is as scalable as possible. We also want to detect fall audio, as audio can help make our results more accurate. Audio also would allow our project to be active in more locations in a household, and cover for the blind spots cameras typically have.

Guardian Angel is a deployable and complete application in itself, but we hope to take extra steps to make our project even more user-friendly. One thing we want to implement in the near future is to create an API for our application so that we can take advantage of existing home security systems. By utilizing security cameras that are already present, we can lower the barriers to entry for consumers as well as improve our reach.

# Running
To run the project
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
