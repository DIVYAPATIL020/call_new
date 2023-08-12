import { NavLink } from "react-router-dom";
import { FaBars, FaFilm, FaHome, FaLock, FaMoneyBill, FaPlane, FaPray, FaPrayingHands, FaRedRiver, FaUser } from "react-icons/fa";
import { MdAnnouncement, MdCatchingPokemon, MdContactPage, MdEvent, MdFeedback, MdFunctions, MdManageAccounts, MdMessage, MdMicExternalOn, MdPinDrop, MdSpeaker, MdSpeakerPhone, MdVolunteerActivism } from "react-icons/md";
import { BiAnalyse, BiCheckboxChecked, BiMicrophone, BiNews, BiPhotoAlbum, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillAlert, AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck, BsCheck, BsFilm, BsPeople, BsSpeaker, BsTree } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/Call_report",
    name: "Call report",
    icon: <FaHome />,
  },

  {
    path: "/Call_typewise",
    name: "Call typewise report",
    icon: <MdFeedback />,
  },
  {
    path: "/Miss_call",
    name: "Miss call report",
    icon: <BiNews />,
  },
  {
    path: "/Userwise_call",
    name: "Userwise call report",
    icon: <BiMicrophone />,
  }

]

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "260px" : "50px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Call Center
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
