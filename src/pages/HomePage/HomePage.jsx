import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";

import Header from "@/components/Header/Header";

import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import DishesMenu from "@/components/DishesMenu/DishesMenu";
import { useState, useEffect } from "react";
import { foods, categories } from "@/db/food";
import { useAuth } from "@/components/AuthProvider";
import NavBar from "../../components/NavBar/NavBar";


function HomePage() {
  const { fireStoreUser } = useAuth();

  const [category, setCategory] = useState("all");

  return (
    <div>

      <NavBar />

      <div className="mainRoot">
        <Header />


        <CategoryTabs
          categories={categories}
          setCategory={setCategory}
          category={category}
        />
            
        <div className="dishesMen">
          <DishesMenu />
      </div>
    </div>
</div>
  );
}

export default HomePage;
