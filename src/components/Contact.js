import { useCustomProductContext } from "../context/ProductContext";

const Contact = () => {

  //destructure object from productContex which return through CustomProductContext
  const { name } = useCustomProductContext();

  return (
    <>
      {name}
      <h2 className="text-2xl font-bold mb-6 text-center mt-10">Contact Us</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center max-w-7xl px-10 mx-auto items-center '>

        {/* goto google map -> goto your specific location -> click on share -> Embed a map -> copy link and paste it here */}
        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842920963!2d72.41492881144384!3d23.020474101422135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721130214599!5m2!1sen!2sin" height="450" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        {/* contact data show into your mail through bellow  action link   --  // Make sure to run npm install @formspree/react*/}
        <div className="w-full	md:px-10 ">
          <form className="space-y-4" action='https://formspree.io/f/xyzgzbdo' method='POST'>
            <div>
              <label htmlFor="username" className="block text-lg font-medium mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Contact
