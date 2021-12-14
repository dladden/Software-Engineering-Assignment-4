
<br /> <br /> 

<p align="center">
  <img src="https://i.ibb.co/Z8XhgQN/KAFFi01-01.png" />
</p>

<br /> 
<br /> 

# Software Engineering portfolio for LesChevaliers


### Authors:
#### Denys Ladden
#### Emil Bjørlykke Berglund


<br /> 
<br /> 

#### LINKS:

[Docker Repository](https://hub.docker.com/repository/docker/dladden/prototype-kaffi)

[Prototype showcase video (Kaltura)](https://video.bellarmine.edu/media/Kaffi-video/1_6le1czmp/232612703)

<br /> 

## Synopsis
#### PWA server prototype application, with steps to install and deploy Dockerized React Kaffi Application .
<br/>

***Overview***


This is a school project we were assigned at Bellarmine University in our Software engineering (CS-400) class. It's our final portfolio of a project we have been working on since the beginning of the semester. We have learned a lot about different software development and engineering principles as well as methodologies in the lectures and we have used this throughout the semester to work on our very own software development project.
<br/>
<br /> 

## Development
To start development of kaffi, the system must have prerequisites such as Node.js, Javascript Package Managers `npm` and `yarn`, and `docker` to build this React application. Check the versions and if these are installed with commands: ` node -v`, `npm -v`, `yarn -v`, as well as `docker -v`
<br /> 

To begin development use the following commands in the directory of cloned file:

```
$ git clone https://github.com/Bergis1610/Software_Engineering_LesChevaliers/tree/main/prototype
$ cd prototype
$ npm install
$ yarn start
```
Comment: Yarn will install multiple packages at once opposed to npm
<br /> 

#### Discrepancies:
After installation of the dependencies module has to be modified in order to deploy the application due to version discrepancies which contains in the nude_module. This configuration is done in the `organization.js` resource. Use command:
```
$ cd node_modules/@availity/api-axios/lib/src/resources
```

Then delete the following code in lines 17 - 21 in the `organization.js` :
 
<p align="center">
  <img width="100%" src="https://i.postimg.cc/3JwjXpg9/carbon.png" />
</p>
<br/> 
<br/>

## Local Server Deployment
For local server deployoment run the following command:
```
$ yarn start
```
Check Localhost:3000 at http://localhost:3000/

### Deploying Application in a Docker Image
Dockerfile contains all needed instructions for Docker to deploy the image for the application, please run the following command:
```
docker-compose -f docker-compose.yml up
```
Then check Localhost:3000 at http://localhost:3000/
<br/>
<br/>

## Docker Image Repository:

Kaffi server image is pushed to Docker Hub, you must first name your local image using your Docker Hub username and the repository name that you created through Docker Hub on the web. Please note that step 1 through 4 are for pushing a docker image to dockerhub and step 5 is for pulling it.

**Step 1**

Checking all the docker images in the system, to see the listed prototype_web, use command:

````javascript
docker images

````
<br/>

**Step 2**

Take note of the TAG and next log in into the the Docker Hub using command:

````javascript
docker login

````
<br/>

**Step 3**

To upload the prototype_web to Docker Hub, the command is used:

````javascript
docker tag prototype_web:latest dladden/prototype-kaffi
````
<br/>

**Step 4**

Next using the push command the now built image is pushed to the repository:

````javascript
docker push dladden/prototype-kaffi 

````
<br/>

**Step 5**

To pull the image from the repository use command:

````javascript
docker pull dladden/prototype-kaffi

````
<br/>
Comments: Dockerfile contains all needed 


## Testing
#### Unit Testing 
Unit testing has become a requirement for all developers in the industry. Testing is a task of the developer now in every environment of programing and has to be incorporated accordingly. The general testing engine used by this project consists of jest and react-test-renderer. Jest is a JavaScript testing framework maintained by Facebook and React provides the React Testing Library, which if not present in the node_modules can be installed: `npm install --save-dev @testing-library/react`

The following command runs tests to all .test files in the project:
```
$ npm test
```
### Testing the `App.js`
In order to test the application the `App.test.js` is created which alows React to run the test with the `npm test` command. To test if the Application is stable React has a built in unit test for rendring without crashing. 
<p align="center">
  <img width="100%" src="https://i.postimg.cc/QNFYDRzj/carbon02.png" />
</p>

The React Testing Library is a testing framework for React components. It provides light utility functions on top of react-dom and react-dom/test-utils, to encourages better testing practices. Next testing is implimented on the FindMeButton. In order to test a component to access it `id` should be implemented so that `<div data-testid="FindMeButton">`


#### Resolving Dependencies Isues
<p align="center">
  <img width="100%" src="https://i.postimg.cc/kX7dBbFG/Screen-Shot-2021-12-02-at-11-05-52-AM.png" />
</p>



<br/><br/>



<h1 align="center">Prototype in Action</h1>
<br/>

<p align="center">
  <img width="100%" src="https://media.giphy.com/media/4jGewt5B0aMlhYtdXD/giphy.gif" />
</p>


Note: The prototype provided is not a complete application as it was all we managed to get done in the time granted to us, however, we are planning on working more on it in the future, so there might be updates to come.

 <br/>

**Phase 1** <br/>
There were 4 phases of this project, in the first phase we had to come up with our software idea and then creat an actual physical box. This box was supposed to resemble a product that you could buy in a regular store. We also created a journal describing our ideas for functions, names and whom are target customers could be. The pictures of our box as well as the journal can be found in the design_documents folder by clicking on the several box pictures and the journal under the name: [Software Engineering Assignment 1.pdf](https://github.com/Bergis1610/Software_Engineering_LesChevalier/blob/main/design_documents/Software%20Engineering%20Assignment%201.pdf)

**Phase 2** <br/>
The second phase was about features, scenarios, personas and user stories. A nice way to get a better idea of what features should be included in a software product is to pretend to have some fake users, in other words, personas, with their own personal situations, needs and wants. From this the developers, us in this case, can get a better idea of the target users' perspectives. Quite frankly, stepping into the users shoes. The pdf containing our personas, features, user stories and scenarios may be found in the design_documents under the name: [Software_Engineering_Assignment_2_EBB_DL.pdf](https://github.com/Bergis1610/Software_Engineering_LesChevalier/blob/main/design_documents/Software_Engineering_Assignment_2_EBB_DL.pdf)

**Phase 3** <br/>
In the third phase it was almost time to start making the actual product, but first we had to come up with a design for the software architecture as well as figuring out which technologies and services we would use. This pdf may be found in design_documents under the name: [architectural_design_LesChevaliers.pdf](https://github.com/Bergis1610/Software_Engineering_LesChevalier/blob/main/design_documents/architectural_design_LesChevaliers.pdf)

**Phase 4** <br/>
The last and final phase we worked on making a functioning prototype of the product so that a user could an understanding of the main functions of the product and get a feel of the actual application and gui. We used some unit testing techniques and got a feel for docker to containarize the product for easier running. You may find the code for the prototype in the prototype folder.


<br /> 

***Demonstration video*** <br/>
[Here is the our demonstration video](https://video.bellarmine.edu/media/Kaffi-video/1_6le1czmp/232612703) <br />


***Reflection*** <br/>
Throughout this project and class we have learned a lot about different software design and engineering methodologies and approaches and it has been really fun and interesting, as well as quite challenging at times, to use these during our project. We would consider the first phase more of a marketing type phase because we were focusing more on the appearance of the box, our slogan, our vision statement and how to inform our users about what our product has to offer. We enjoyed this because it was a slight different take on a CS class than what we are used to. 

The second part of the project was also a more creative part where we created personas, scenarios and user stories which was quite fun and interesting. It also gave us some insight on how some of our features should be and some on how we should try to design our application/software. We really had to dive into that for the third part, here we had to do some research on services and technologies for backend and frontend, if we should reuse or make something new specifically for our case.

The final part was by far the most challenging part. Considering the fact that we did have other large projects in other high-level CS-courses, we weren't able to submerge ourselves into this project soley, which would have made a big difference on efficiency and the final prototype as well, however we do believe that we managed to make a slick, well-working prototype that encapsulated our main ideas and visions. For this part we also had to do research on how to containarize, using docker, and how to do unit testing on our program despite it being primarily a GUI- application. 

Another important thing we noticed and learned is that we had so many ideas and plans and visions in the beginning, but then throughout the course of the project, some of those ideas changed as we learned more about software design and development. The biggest jump probably, was between the third and fourth phase. We had a good idea on how our product should be built up, as in the architecture, but when the 4th phase came and we actually had to start developing and coding some of our initial plans were easier said than done, and though we had quite some latitude on this project as a whole, the fact that we had to dockerize and unit test caused some restrictions to which we needed to work within and this caused us to do some changes in our design ideas and some minor disruptions in our plans. This taught us however some valuable leasons when it comes to software development and product design, because you cannot always, in fact you can almost never make something that is perfect, especially when it comes to software, so we had to choose which direction we wanted to go and take both the advantages and the disadvantages that come with it. This, we would argue, was probably the most important thing we learned.
