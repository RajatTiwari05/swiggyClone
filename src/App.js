import {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Contact from "./components/Contact";
import Error from "./components/Error";
import Help from "./components/Help";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";



const Grocery = lazy( () => import("./components/Grocery"));
const About = lazy( () => import("./components/About") );
const AppLayout = () => {
    const [userName,setUserName] = useState();

    useEffect(() => {
      // make the authentication and retrieve the userName as per the database
      const data = {
        name: "Rajat",
      };
      setUserName(data.name);  
    },[]);

    return (
        <div className="app">
            <UserContext.Provider value={{loggedInUser: userName}}>
                <Header/>
                <Outlet/> {/* outlet is used for children routing here */ }
            </UserContext.Provider>
        </div>
        
        
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/help",
                element: <Help/>
            },{
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
                // falback takes a JSX code or component and it shows the same component until the Grocery component takes time to load.
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter}/>);



