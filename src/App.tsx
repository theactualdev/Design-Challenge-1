import './App.css'
import image1 from './assets/one.svg'
import image2 from './assets/two.svg'
import image3 from './assets/three.svg'
import image4 from './assets/four.svg'
import image5 from './assets/five.svg'
import image6 from './assets/six.svg'
import image7 from './assets/seven.svg'
import image8 from './assets/eight.svg'

let imageArray = [image1, image2, image3, image4, image5, image6, image7, image8];

let date = new Date();

let year = date.getFullYear()

function App() {
  return (
    <>
      <div className="content-container mt-16">
        <h1 className='text-textBlack font-bold'>Discover the beauty around the world</h1>
        <p className='text-center text-textBlack font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
        <button className='bg-textBlack text-white font-bold mt-6 py-4 rounded-2xl'>Explore</button>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
        {imageArray.map((image, index) => (
          <div key={index} className='relative'>
            <img src={image} alt='image' className='rounded-2xl' />
          </div>
        ))}
      </div>

      <footer className='bg-textBlack w-screen text-center mt-12 flex justify-around text-white'>
        <div className="copyright">
          Copyright &copy; {year} theactualdev
        </div>
        <div className="figma">
          <a href="https://www.figma.com/file/4UbuQuyAc6FheovBkMGNKo/50%2B-Landing-page-designs-(Community)?type=design&node-id=801-2256&mode=design&t=kAbcYUHhTx6zYf5d-0" target='_blank'>Figma</a>
        </div>
      </footer>
    </>
  )
}

export default App