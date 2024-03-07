import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaFileUpload, FaUser } from "react-icons/fa";
import image from "./../../../../DummyData/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setStep,
  setFormData,
  selectStepper,
} from "../../../../Stores/slices/Regslice";

const Form5 = () => {
  const dispatch = useDispatch();
  const { currentStep, formData } = useSelector(selectStepper);
  const [formfive, setFormFive] = useState({
    aboutYourself: "",
    userPhotos: [],
    profilePicture: "",
    interest: "gibberish",
    fun: "nothing",
    fitness: "nothing as well",
    other: "hjswdg",
  });

  const page = 5;
  const handleinput = (e) => {
    const { name, value, files } = e.target;

    if (name === "userPhotos") {
      // Handle multiple files for userPhotos
      const selectedFiles = Array.from(files);
      setFormFive((prevForm) => ({
        ...prevForm,
        [name]: [...prevForm[name], ...selectedFiles],
        profilePicture: formfive.userPhotos[0],
      }));
    } else {
      // Handle other input fields
      setFormFive((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Form Submitted");
  };

  const nextForm = () => {
    // Validate form data and update stepper state
    if (currentStep === 5) {
      dispatch(setStep(currentStep + 1));
    } else if (currentStep === 5) {
      dispatch(setStep(currentStep + 1));
    } else {
       //will handle something else soon
    }
  };

  const prevForm = () => {
    dispatch(setStep(currentStep - 1));
  };

  return (
    <>
      <div className="bg-[#FCFCFC]  px-9 py-12 rounded-xl shadow ">
        <div className="flex flex-col mb-2">
          <label htmlFor="name" className="font-semibold mb-1">
            About yourself
          </label>
          <textarea
            value={formfive.about}
            onChange={(e) => handleinput(e)}
            className="p-2  bg-[#F0F0F0] mt-1 outline-0 h-[30vh] border focus:border-[#CC2E2E]  rounded-md mb-3"
            type="text"
            name="aboutYourself"
            placeholder="Write about yourself...."
            id="about"
          />

          <label htmlFor="name" className="font-semibold mt-2 mb-9  ">
            My photos
          </label>
          <span className=" flex items-center ml-44 w-[200%]">
            <label
              htmlFor="images"
              className="drop-container  border border-[#CC2E2E] "
              id="dropcontainer"
            >
              <span className="drop-title">Upload a Photo</span>
              <span className="flex items-center justify-center ">
                <FaFileUpload color="#CC2E2E" size={50} />
              </span>
              <input
                type="file"
                id="images"
                accept="image/*"
                multiple
                name="userPhotos"
                onChange={(e) => handleinput(e)}
                required
              />
            </label>
          </span>
          <span className="flex flex-wrap gap-5 mt-20 ]">
            {formfive.userPhotos.map((selectedImage, index) => (
              <span key={index}>
                //this line is the info i gained in this whole page hence imma going to ingrain this in my brain
                 {/* 
                  Dynamically render selected images from the 'userPhotos' array, utilizing the URL.createObjectURL method.
                  This method creates a DOMString containing a URL representing the selected image, which is then assigned to the 'src' attribute of the <img> element.
                 */}
                <img
                  src={URL.createObjectURL(selectedImage)}
                  className="w-[20vh] h-[20vh] rounded-xl border-[2px] border-primary"
                  alt={`Selected Image ${index + 1}`}
                />

                <span className="flex mt-5 items-center justify-center">
                   {/* 
                    For each selected image, display a delete button allowing users to remove the corresponding image.
                    Upon clicking the button, the 'onClick' handler triggers a function to update the state by removing the selected image from the 'userPhotos' array.
                    The 'profilePicture' state is also updated to reflect the first image in the array, or an empty string if no images remain.
                  */}
                  <div
                    className="px-12 py-2 border cursor-pointer border-primary hover:bg-primary hover:text-white rounded-xl text-primary"
                    onClick={() => {
                      // Handle image removal with filter
                      const updatedUserPhotos = formfive.userPhotos.filter(
                        (_, i) => i !== index
                      );
                      setFormFive((prevForm) => ({
                        ...prevForm,
                        userPhotos: updatedUserPhotos,
                        profilePicture:
                          updatedUserPhotos.length > 0
                            ? updatedUserPhotos[0]
                            : "", // Update profilePicture based on the first image in the array
                      }));
                    }}
                  >
                    <RiDeleteBin6Line size={20} />
                  </div>
                </span>
              </span>
            ))}
          </span>

          <p className="pt-5 text-[13px]">
            Add a minimum of 3 or a maximum of 5 high-quality images. Select 1
            image as your thumbnail image. Your thumbnail image will be visible
            to everyone. Once you permit other profiles, then you entire profile
            will get unlocked & visible to the other members)
          </p>
        </div>
        <label className="font-semibold  pt-5  ">Interests</label>
        <select
          name=""
          onChange={(e) => handleinput(e)}
          className="p-2 w-full bg-[#F0F0F0] mt-1 outline-0 h-[8vh] border focus:border-[#CC2E2E] rounded-md"
          id=""
        >
          <option value=""></option>
        </select>
        <label className="font-semibold mt-2 mb-9  ">Fun</label>
        <select
          name="dun"
          onChange={(e) => handleinput(e)}
          className="p-2 w-full bg-[#F0F0F0] mt-1 outline-0 h-[8vh] border focus:border-[#CC2E2E] rounded-md"
          id=""
        >
          <option value=""></option>
        </select>
        <label className="font-semibold mt-2 mb-9  ">Fitness</label>
        <select
          name="fitness"
          onChange={(e) => handleinput(e)}
          className="p-2 w-full bg-[#F0F0F0] mt-1 outline-0 h-[8vh] border focus:border-[#CC2E2E] rounded-md"
          id=""
        >
          <option value=""></option>
        </select>
        <label className="font-semibold mt-2 mb-9  ">Other Interests</label>
        <select
          name="otherintrest"
          onChange={(e) => handleinput(e)}
          className="p-2  w-full bg-[#F0F0F0] mt-1 outline-0 h-[8vh] border focus:border-[#CC2E2E] rounded-md"
          id=""
        >
          <option value=""></option>
        </select>

        <span className="flex justify-center mt-16">
          <span
            className="bg-[#A92525] px-5 py-2 rounded-lg text-[#ffffff]"
            onClick={nextForm}
          >
            Continue
          </span>
        </span>
      </div>
    </>
  );
};

export default Form5;
