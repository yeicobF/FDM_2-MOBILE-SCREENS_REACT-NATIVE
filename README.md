<!--
  FUENTE SINTAXIS BÁSICA MD
  https://www.markdownguide.org/basic-syntax/
-->

# **WEBSITE CREATED WITH HTML, CSS AND JS DINAMICALLY**

## **STARTED**

> Wednesday, April 14th, 2021

## **DELIVERY DATE**

> Thursday, April 15th, 2021

## **SCHOOL SUBJECT FOR WHICH THIS WAS MADE**

> ### Fundamentos de Desarrollo Móvil
>
> - [6SEM - 1 PARTIAL] [2020 - 2021/B]

## **EXPLANATION**

> - This is a project where I had to replicate 2 mobile layouts which were
>   made in Figma by the teacher.
>
> - The 2 screens should be linked for 1 extra point.
>
> - This is made using React Native in JavaScript.

## **LAYOUTS LOCATION**

> ### **FOLDER: final-layouts-objective**
>
> - Google Pixel 2 - 1.pdf
> - Google Pixel 2 - 5.pdf

## **MOBILE LAYOUTS**

<blockquote>
  <br>
  <h3 style="text-align: center;">
    <strong> <em> OBJECTIVE LAYOUT </em> </strong>
  </h3>
  <br>
  <div style="margin: auto auto auto auto;
       display: flex;
       justify-content: space-between;">
    <img src="final-layouts-objective/first-desired-screen.png"
         alt="First desired screen" title="First desired screen" width="30%">
    <img src="final-layouts-objective/second-desired-screen.png"
         alt="Second desired screen" title="Second desired screen" width="30%">
  </div>

  <br>
  <h3 style="text-align: center;">
    <strong> FINAL RESULT </strong>
  </h3>
  <br>
  <div style="margin: auto auto auto auto;
       display: flex;
       justify-content: space-between;">
    <!-- <img src="final-layouts-objective/first-desired-screen.png"
         alt="First desired screen" title="First desired screen" width="48%">
    <img src="final-layouts-objective/second-desired-screen.png"
         alt="Second desired screen" title="Second desired screen" width="48%"> -->
  </div>
  <br>
</blockquote>
<!-- > ![First desired screen](final-layouts-objective/first-desired-screen.png "First desired screen") -->
<!-- > ![Second desired screen](final-layouts-objective/second-desired-screen.png "Second desired screen") -->

## **WHAT I USED**
>
> - I used ESLint with Airbnb coding style conventions with some own
>   personalized rules according to what I like. This was not asked by the
>   teacher.
>
> - Expo Developer Tools to see the changes either in web or in the Android
>   device.
>
> ### ***I HAD TO UPGRADE THE EXPO SDK***
>
> I had to upgrade the expo SDK to the latest version following the next
> tutorial in the section ***"Upgrading Your App"***:
>
> ***[Upgrading Expo tutorial](https://blog.expo.io/expo-sdk-35-is-now-available-beee0dfafbf4 "Expo SDK 35 is now available - Upgrading Your App")***
>
> ### **REACT NAVIGATION - NavigationContainer**
>
> I needed to install React Navigation. For that, I followed the tutorials from:
>
> - ***[[Youtube video] React Native Tutorial #19 - React Navigation Setup](https://www.youtube.com/watch?v=OmQCU-3KPms&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=20&ab_channel=TheNetNinja "[Youtube video] React Native Tutorial #19 - React Navigation Setup")***
> - ***[Getting started with React Navigation 6.x (current)](https://reactnavigation.org/docs/6.x/getting-started "Getting started with React Navigation 6.x (current)")***
> <blockquote>
> 
> #### PROBLEMS I HAD
>
> - [Gürol Canbek's ANSWER from Props validation for "navigator"](https://stackoverflow.com/questions/46868188/react-navigation-navigation-is-missing-in-props-validation)
> 
> 
  <h3><strong><em>HOW TO USE CUSTOM FONTS</em></strong></h3>
  <p>I had to install <code><strong><em>expo-font</em></strong></code> using the following command:</p>
  <!-- white-space: pre; <- AGREGA ESPACIO ANTES Y DESPUÉS DEL TEXTO. -->
  <blockquote style="white-space: pre-wrap;">
    <code style="color: #1ABC9C;"><strong><em>expo install <code style="color: #F7DC6F;">expo-font</code></em></strong></code>
  </blockquote>
  
  <h3><strong><em>INSTALL AppLoading</em></strong></h3>
  <p>I had to install <code><strong><em>expo-app-loading</em></strong></code> using the following command:</p>
  <!-- white-space: pre; <- AGREGA ESPACIO ANTES Y DESPUÉS DEL TEXTO. -->
  <blockquote style="white-space: pre-wrap;">
    <code style="color: #1ABC9C;"><strong><em>expo install <code style="color: #F7DC6F;">expo-app-loading</code></em></strong></code>
  </blockquote>

</blockquote>

>
> For this, I followed the tutorial from this video:
>
> ***[[Youtube video] React Native Tutorial #17 - Custom Fonts](https://www.youtube.com/watch?v=IY5OBeL9LNE&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=18&ab_channel=TheNetNinja "[Youtube video] React Native Tutorial #17 - Custom Fonts")***
>
>> ***The method for getting the fonts must be in the entry file, and the***
> ***defined font styles will be accesible from any file.***  
>
> ### ***REACT NATIVE SVG***
>
> In order to use put a stroke (border) to the font, I had to install
> '`react-native-svg`'. I used it in the login screen. I found this solution
> here, in "*Vencovsky*"'s answer:
>
> [\[Stack Overflow\]Adding a solid stroke to Text](https://stackoverflow.com/questions/60377239/adding-a-solid-stroke-to-text "[Stack Overflow] Adding a solid stroke to Text")
>
> #### **INSTALATION**
>
> I followed the steps specified in the git repo's README:
>
> [react-native-svg/react-native-svg](https://github.com/react-native-svg/react-native-svg#text "React Native SVG install instruction")
>
> #### ***STEPS***
>
> 1. Install '`react-native-svg`' with the follwing command:
>
> > `expo install react-native-svg`
>
> 1. import `Svg` at the top of the file:
>
> > import Svg from 'react-native-svg'
>
> ### ***NOTE***
>
> In the repo's README it specifies this [Usage](https://github.com/react-native-svg/react-native-svg#usage "React Native Usage"):
>
> > */\* Use this if you are using Expo*  
> import `\*` as `Svg` from '`react-native-svg`';  
> const { Circle, Rect } = `Svg`;  *<- This is specific for the presented problem*
>                                     *in the site.*  
> \*/
>
> So,  will see if this last thing is the correct way to do it, or if it is the
> other way.
>
> <br>

## **TUTORIALS I FOLLOWED**
>
> <br>
> I followed some tutorials in order to my better understanding of some things.
>
> - ***[[35 videos] React Native Tutorial for Beginners [Youtube playlist]](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ "I only watched some videos")***
>
> <br>

## **PROBLEMS I FACED**
>
> ### ***I COULD NOT RUN THE APP ON THE PHONE***
>
> <br>
>
> #### &emsp;&emsp;***WHAT I FOUND***
>
> Every time I tried to run the app from my phone I got an error on the expo
> app. It said that there had been a problem because of excess of time. I
> checked in many sites and I couldn't find the solution, until I encountered
> the next URL:
>
>> [[Stack overflow] How to indent a few lines in Markdown markup?](https://stackoverflow.com/questions/43002144/cant-load-expo-app-something-went-wrong "[Stack overflow] How to indent a few lines in Markdown markup?")
>
> There I found Masoud's answer from "Feb 12 '18" which said the next thing:
> <blockquote>
  <blockquote>
    <cite>
      For my case, using wireless adapter, I had to make my Network profile
      private.
    </cite>
  </blockquote>
  <br>
</blockquote>

>
> #### &emsp;&emsp;***SOLUTION***
>
> I had to turn my network profile from public to private. I assumed that I had
> it on private, but I did not.
>
> #### &emsp;&emsp;**STEPS in a spanish system**
>>
>> 1. Go to "Configuración de Windows".
>> 2. Select "Internet y red".
>> 3. Go to "Wi-Fi".
>> 4. Select your network.
>> 5. The options of public or private networkn is in the section
>> "Perfil de red".
>> 6. Select "Privado".
>> 7. Now it is a private network and the app should run on the phone correctly.
>
> ### ***I FOUND A PROBLEM WITH VERSIONS***
>
> I found the next problem:
> Some dependencies are incompatible with the installed expo package version:
>
>> - `react-native-screens` - expected version range: `~3.0.0`
>> - `actual version installed`: `^3.1.1`
>
> Your project may not work correctly until you install the correct versions of
> the packages.
>
> To install the correct versions of these packages, please run: expo install
> [package-name ...]
>
> #### &emsp;&emsp;***APPARENT SOLUTION***
>
> I found a post where this is pressumably solved:
>
> - [[Stack Overflow]React Native - Dependencies are not compatible with currently expo package version when running npm start](https://stackoverflow.com/questions/61785783/react-native-dependencies-are-not-compatible-with-currently-expo-package-versi "[Stack Overflow]React Native - Dependencies are not compatible with currently expo package version when running npm start")
>
> ### &emsp;&emsp;**QUESTION'S PROBLEM**
>
> `@react-native-community/netinfo` - expected version range: `5.5.1` - actual
> version installed: `^5.8.1`
>
> Answer from (refering to the specific dependency of the question):
> *Khalid Almannai*:
>
>> The fix is to run "expo update" on the project folder.
>>
>> **Update:**
>>
>> You can also use the following:
>>
>> `expo install @react-native-community/netinfo@5.8.1`
>>
>> to fix the problem instead of using the big hammer "expo update" :)
>
> <blockquote>
  <h2 style="color: #0DF1C4; font-weight: 700;"> WORKING SOLUTION </h2>
  <p>
    The following solution worked for me. The warning message stopped showing
    up.
  </p>
  <blockquote>
    <code style="color: #F1E70D; font-weight: bold; display: inline-block;">
      expo install
      <code style="color: #D481F5;">react-native-screens</code>@<code style="color: #F167F1;">3.0.0</code>
      <!--
        Quería mantener el espacio después del expo-install, pero no se podía.
        Encontré en este sitio
        - https://www.computerhope.com/issues/ch001662.htm#:~:text=To%20create%20extra%20spaces%20before,breaking%20space)%20extended%20HTML%20character.
        Que con el tag <pre> se conservan los espacios y eso. Por eso la utilcé,
        aunque se ve muy mal con tantos estilos y eso. Si supiera otra forma de
        hacerlo, lo haría.
      -->
      <!--
      <pre style="color: inherit; font-weight: inherit; font-family: inherit;background-color: transparent; margin: 0; padding: 0;">
      expo install 
      </pre>
      -->
    </code>
  </blockquote>
  <br>
</blockquote>
