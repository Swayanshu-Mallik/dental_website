import React, { useState } from 'react';

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    Phone: "",
    Email: "",
    Address: "",
    Chooseservice: "",
  });

  const handleInputs = (e) => {
    console.log(e); // Optional for debugging
    const { name, value } = e.target; // Destructuring to get name and value
    setUser({ ...user, [name]: value }); // Update user state
  };

  return (
    <div className="bg-primary text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="space-y-5 sm:p-16 pb-6">

          <div className="space-y-5 sm:p-16 pb-6">
                <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold">Best In City</h1>
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold">TRUSTED SERVICES</h1>
                <p data-aos="fade-up" className="leading-8 tracking-wide">
                We believe in building strong relationships with our patients. We take the time to listen to your concerns, answer your questions, and explain your treatment options in clear and concise terms. Your comfort and satisfaction are our top priorities.
                </p>
            </div>
            {/* Left content section */}
          </div>
          <div className="space-y-5 sm:p-16 pb-6">
            <div className="w-full md:max-w-[350px] mx-auto ">
              <h1 data-aos="fade-up" className="uppercase text-2xl text-white bg-black px-5 py-3 rounded-lg">
                Schedule
              </h1>
              <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5 rounded-lg">
                <input
                  className="inputField"
                  type="text"
                  name="name"
                  id=""
                  value={user.name} // Access specific property of user object
                  onChange={handleInputs}
                  placeholder="Name"
                />
                <input
                  className="inputField"
                  type="text"
                  name="Phone"
                  id=""
                  value={user.Phone} // Access specific property of user object
                  onChange={handleInputs}
                  placeholder="Phone"
                />
                <input
                  className="inputField"
                  type="text"
                  name="Address"
                  id=""
                  value={user.Address} // Access specific property of user object
                  onChange={handleInputs}
                  placeholder="Address"
                />
                <input
                  className="inputField"
                  type="text"
                  name="Email"
                  id=""
                  value={user.Email} // Access specific property of user object
                  onChange={handleInputs}
                  placeholder="Email"
                />
                <input
                  className="col-span-2 inputField"
                  type="text"
                  name="Chooseservice"
                  id=""
                  value={user.Chooseservice} // Access specific property of user object
                  onChange={handleInputs}
                  placeholder="Chooseservice"
                />

                <button className="col-span-2 bg-black w-full mt-6 text-white py-2 px-4 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;