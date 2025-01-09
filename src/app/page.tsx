"use client"
import { CategoryItemWithImg } from "@/components/CategoryItemWithImg";
import { SearchBar } from "@/components/SearchBar";
import { SuggestionSideBar } from "@/components/SuggestionSideBar";
import { AppDispatch, RootState } from "@/features/store";
import { setIsTextHidden } from "@/features/navbarSlice"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from '@/features/categories/categoriesApi'
import { ProductsByCategory } from "@/components/ProductsByCategory";
import useCurrentUser from "@/hooks/useCurrentUser"
import { logout } from '@/features/users/userApi'
import { data, categoriesData } from "@/data";
import Image from 'next/image';
import { IoHeartOutline } from "react-icons/io5";
import { MainItemOutline } from "@/components/MainItemOutline";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const user = useCurrentUser()
  const { loading, categories, error } = useSelector((state: RootState) => state.categories)

  const handleDeconnexion = () => dispatch(logout())
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(setIsTextHidden(false))
  }, [])
  return (
    <main className="flex w-full">

      <div className="w-[70%] min-h-[100vh] h-auto border-x-[1px] border-[#121212]">
        <SearchBar />
        <div>
          {/* {
            categories.map(category => (<ProductsByCategory key={category.id} category={category} />))
          } */}
        </div>
        <div>
          <div>
            {data.map((category, index) => {
              const categoryName = Object.keys(category)[0];
              const items = category[categoryName];

              return (
                <div key={index} className="mb-5 text-white">
                  <h2 className="text-[16px] font-[500] px-2 flex justify-between items-center">
                    <span>{categoryName}</span>
                    <Link href={`${categoryName}/${index}/`} className="text-blue-600 text-[12px]">Voir plus</Link>
                  </h2>

                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={5}
                    slidesPerView={2.5} // Nombre de slides visibles, ajustable
                  >
                    {items.map((item, itemIndex) => (
                      <SwiperSlide key={itemIndex}>
                        {categoryName === "emplois" ? (
                          // Carte spécifique pour "emplois"
                          <MainItemOutline
                              key={itemIndex}
                              className={"ml-2"}
                              image={item.image}
                              categ={categoryName}
                              index={itemIndex}
                              entreprise={item.username}
                              salaireHoraire={item.salaireHoraire}
                              typeContrat={item.typeContrat}
                              date={item.date}
                              description={""}
                              poste={item.titre} />

                        ) : (
                          // Carte générique pour les autres catégories
                          <div className="mx-5 mb-3 mt-2">
                            <div className="flex items-center">
                              <div className="flex justify-center mr-2 mb-[5px] items-center rounded-full h-[25px] bg-blue-400 text-[12px] w-[25px]">
                                {item.username.charAt(0).toUpperCase()}
                              </div>
                              <p className="text-[12px]">{item.username}</p>
                            </div>
                            <Link href={`ct/${categoryName}/${itemIndex}`}>
                              <Image
                                src={item.image}
                                alt={item.titre}
                                className="rounded-lg h-[200px] w-[100%]"
                                width={150}
                                height={150}
                              />
                            </Link>
                            <h3 className="flex justify-between mt-[5px]">
                              <span className="text-[16px]">{item.titre}</span>
                              <IoHeartOutline className="text-[18px]" />
                            </h3>
                            <p className="text-[12px]">{item.prix}</p>
                            <p className="text-[12px] text-gray-400">{item.location}</p>
                            <p className="text-[12px] text-gray-400">{item.date}</p>
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              );
            })}
          </div>

          <div className="p-2 text-white font-[500]">Explorer nos categories</div>
          {/* <div className="text-2xl text-white">{user?.username}-{user?.id}</div>
          <button onClick={handleDeconnexion} className="text-white">Deconnexion</button> */}
          <div className="w-full px-6" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* {
              categories.map(category => (<CategoryItemWithImg category={category} />))
            } */}
            {
              categoriesData.map((categ) => (
                <div className="text-white p-2 border-[1px] text-gray-300 border-gray-600 m-2">
                  {categ.titre}
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <div className="w-[30%]">
        <SuggestionSideBar />
      </div>

    </main>
  );
}
