const ContactUs = () => {
  return (
    <section>
      {/* Container */}
      <div className=" dark:bg-gray-800 dark:text-white  px-5 py-16 text-center md:px-20 lg:px-40 md:py-20">
        {/* Component */}
        <h2 className="text-3xl font-bold md:text-5xl">Contact</h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-gray-500 md:mb-12 lg:mb-16"></p>
        {/* Form */}
        <form
          name="wf-form-name"
          method="get"
          className="mx-auto mb-4 text-left sm:px-4 md:px-20"
        >
          <div className="mb-4 grid w-full grid-cols-2 gap-6">
            <div>
              <label htmlFor="name-2" className="mb-1 font-medium">
                First Name
              </label>
              <input
                type="text"
                className="mb-4 block h-9 w-full dark:bg-gray-700 dark:text-white  rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label htmlFor="name-3" className="mb-1 font-medium">
                Last Name
              </label>
              <input
                type="text"
                className="mb-4 block h-9 w-full dark:bg-gray-700 dark:text-white  rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                placeholder=""
                required=""
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="field" className="mb-1 font-medium">
              Email
            </label>
            <input
              type="text"
              className="mb-4 block h-9 w-full dark:bg-gray-700 dark:text-white  rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
            />
          </div>
          <div className="mb-5 md:mb-6 lg:mb-8">
            <label htmlFor="field" className="mb-1 font-medium">
              Message
            </label>
            <textarea
              placeholder=""
              maxLength="5000"
              name="field"
              className="mb-2.5 block dark:bg-gray-700 dark:text-white  h-auto min-h-44 w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-black"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Send"
            className="inline-block w-full dark:bg-gray-700 dark:text-white  rounded-md cursor-pointer bg-black px-6 py-3 text-center font-semibold text-white"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
