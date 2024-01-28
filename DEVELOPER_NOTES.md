1. Created React App using Vite.
2. Deleted All Previous Junk Files.
3. Creating Routes for react APP with react-router-dom.
4. Initialized Tailwind to Project.
5. Made Custom Navbar.
6. Made Custom Carousal and put a product list in it.
7. Added Sign in Section of Homepage.
8. Added Trends Section and Top Pick Section in Homepage. Date: 15/1/2024, Monday.
9. Added Footer. Date: 15/1/2024, Monday.
10. Added Responsiveness to Navbar, Date 16/1/2024, Tuesday.
11. Date 17/1/2024, Wednesday, Added Carousel for Larger Screens with Swiper and made a Product Section for larger screens which is used inside the large Screen Carousel and Also outside it. Experimented with lots of Carousel Packages like react-responsive-carousel, swiper and more. Finally Chose Swiper for making carousel for larger Screens.
12. Date 18/1/2024, Thursday
    Planned to Add Books Section for larger Screens.
    1. Choose React Slick to do the Job.
    2. Had some Problems importing slick in Typescript, Used npm install react-slick slick-carousel @types/react-slick to install and got rid of that problem.
    3. Created a Extra Css file to import css of React Slick. Went to their css cdn website to copy and paste their css in that css file. After that, I pasted it on the css file I made.
    4. Used Variables Width slider of react slick with Major Changes, Used AutoPlay Features With it.
    5. Turned React Slick Class into Components.
    6. Added Another Product Section for Larger Screen Using Swiper.
13. Date 20/1/2024, Saturday
    1. Added another LargerScreenSection1Type2 in homepage. Added Some Padding to <main> in Homepage.tsx
    2. Modified Sign in Component Design for larger Screens and Added it to Homepage for Larger Screens.
    3. Added Language Section in footer for Larger Screens.
14. Date 21/1/2024, Sunday.
    1. Planned to Add Extra footer section for Larger Screens in Footer.
    2. Added Some Setting to Toppicks.tsx and FashioninTrends.tsx for looking good in mobile devices.
    3. Planned to add Modal for PopupMenubar
    4. Using React Modal portal to Create Popup
15. Date 22/1/2024, Monday.
    1. Created Popup menubar for small Screens. Popup Menubar Strategies-
       1. First Created a Portal Using React Portal.
       2. Created a low level brigtness div inside React Portal to cover all the other stuffs when the Menubar is Open.
       3. Created a Menubar positioned Absolute. It will stay outside the screen all the time. It will only appear when someone clicks on the menubar.
       4. Made background low level brightness div's opacity to 1 when someone clicks on the Menubar.
       5. Made menubar style "left-0" when someone Clicks on it. So it comes in front of everyone.
       6. Made the position of Root div to Fixed so that it does scrolls when the menubar is open.
       7. Undoing the above things if someone closes the menubar by clicking on the cross button of the menubar.
    2. Started to Create Cart Page.
       1. Planned to Do Mobile First Approach in Designing.
       2. Found Out that line height does not works on span by Default. But it works on div.
16. Date 23/1/2024, Tuesday.
    1. Moved Cart Buttons to Extra Component for Better Maintanibility.
    2. Added function of increasing or decreasing total characters of description of cart product according to screen size.
    3. You need to add top-0 or something like this in order to make "position:sticky" work.
    4. Devided Cart Section to Other Little Components.
    5. Building Cart Section for Larger Screens.
    6. For transforming Scale in tailwind css when the Button is active, use class name "active:scale-[0.95]"
    7. w-[10rem] was not working properly so used both min-w-[10rem] max-w-[10rem] together and now its working.
17. Date 24/1/2024, Wednesday
    1. Adding new International Customers Purchased Section in Cart Page.
    2. You add active:border-[1px] active:border-[black] to add border when element is active in tailwind.
    3. Adding Empty Message for cart.
    4. Updated Empty Cart Message for both Small Screens and Large Screens.
    5. Adding Sign in and Signup for Smaller Devices
    6. Made radio type input block to make it work with flex items-center correctly.
18. Date 25/1/2024, Thursday.
    1. Updated Sign in Page for Smaller section.
    2. Updated Responsiveness for sign in/up page and also added show password facility for both of them.
    3. Had Some trouble opening menubar. When I open menubar , signin page gets smaller. Solved this problem by applying w-[100%] to root div in index.html
    4. Had Some Problems When Used Popup menubar to Go to another page. Fixed this by adding popup close function to every link.
    5. Started to make single product details page.
    6. Deviding ProductCarousel3ForLargerScreens to Smaller Components.
    7. Adding Product Details page for smaller screens.
19. Date 27/1/2024, Saturday
    1.Current was gone so could not do much development. Upgraded product details page at night for smaller screens.
20. Date 28/1/2024, Sunday.
    1. Develop product details page for larger Screens.
    2. Initializing redux toolkit for better Development.
    3. Initialized redux toolkit.
    4. Initialized Screen Size with redux toolkit.
    5. Making Product Details Page For Larger Screens.
    6. Starting Implementing Logic to My Project.
