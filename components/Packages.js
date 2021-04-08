import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() =>
import('3d-react-carousal').then((mod) => mod.Carousel), {
  ssr: false
});

// let slides = [
//   <div className='container text-center mt-3'>
//     <div className="row">
//       <div className="col">
//         <img src="https://i3.lensdump.com/i/IeQU40.jpg" alt="1" />
//       </div>
//     </div>
//     <div className="row">
//         <div className="col mt-3">
//           <h1>Basic Donation</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col mb-3">
//           <h1>under $15</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col mb-3">
//           <ul>
//             <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Get your name on our wall</li>
//             <li><img className='packages-svg' src='/images/times-circle-regular.svg' /> Plant a tree in your name</li>
//             <li><img className='packages-svg' src='/images/times-circle-regular.svg' /> Unique, handmade bracelet</li>
//           </ul>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col-lg-12 mt-4 mb-4 text-center">
//             <div className="button-shared">
//                 <a href="/donate" className="theme-btn">donate
//                     now</a>
//             </div>
//         </div>
//     </div>
//   </div>,

//   <div className='container text-center mt-3'>
//     <div className="row">
//       <div className="col">
//         <img  src="https://i.lensdump.com/i/IeQGka.jpg" alt="2"/>
//       </div>
//     </div>
//     <div className="row">
//         <div className="col mt-3">
//           <h1>Godparent Package</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col mb-3">
//           <h1>$15 +</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col mb-3">
//           <ul>
//             <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Get your name on our wall</li>
//             <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Plant a tree in your name with name-tag</li>
//             <li><img className='packages-svg' src='/images/times-circle-regular.svg' /> Unique, handmade bracelet</li>
//           </ul>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col-lg-12 mt-4 mb-4 text-center">
//             <div className="button-shared">
//                 <a href="/donate" className="theme-btn">donate
//                     now</a>
//             </div>
//         </div>
//     </div>
//   </div>,

//   <div className='container text-center mt-3'>
//     <div className="row">
//       <div className="col">
//         <img  src="https://i1.lensdump.com/i/IeQale.jpg" alt="3"/>
//       </div>
//     </div>
//     <div className="row">
//         <div className="col mt-3">
//           <h1>Community Package</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col mb-3">
//           <h1>$75 +</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col mb-3">
//           <ul>
//             <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Get your name on our wall</li>
//             <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Plant <b>three trees</b> in your name with name-tags</li>
//             <li><img className='packages-svg' src='/images/times-circle-regular.svg' /> Unique, handmade bracelet</li>
//           </ul>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col-lg-12 mt-4 mb-4 text-center">
//             <div className="button-shared">
//                 <a href="/donate" className="theme-btn">donate
//                     now</a>
//             </div>
//         </div>
//     </div>
//   </div>,

//   <div className='container text-center mt-3'>
//     <div className="row">
//       <div className="col">
//         <img  src="https://i2.lensdump.com/i/IeQhbk.jpg" alt="4" />
//       </div>
//     </div>
//     <div className="row">
//         <div className="col mt-3">
//           <h1>Angel Package</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col mb-3">
//           <h1>$375 +</h1>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col mb-3">
//           <ul>
//             <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Get your name on our wall</li>
//             <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Plant <b>five trees</b> in your name with name-tags</li>
//             <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Unique, handmade bracelet</li>
//           </ul>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col-lg-12 mt-4 mb-4 text-center">
//             <div className="button-shared">
//                 <a href="/donate" className="theme-btn">donate
//                     now</a>
//             </div>
//         </div>
//     </div>
//   </div>,
// ];

const PackagesArea = ({
  mainTitle,
  img1,
  img2,
  img3,
  img4,
  title1,
  title2,
  title3,
  title4,
  amount1,
  amount2,
  amount3,
  amount4
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true)
  }, [])


  let slides = [
    <div className='container text-center mt-3'>
      <div className="row">
        <div className="col">
          <img src={img1} alt="1" />
        </div>
      </div>
      <div className="row">
          <div className="col mt-3">
            <h1>{title1}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col mb-3">
            <h1>{amount1}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col mb-3">
            <ul>
              <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Get your name on our wall</li>
              <li><img className='packages-svg' src='/images/times-circle-regular.svg' /> Plant a tree in your name</li>
              <li><img className='packages-svg' src='/images/times-circle-regular.svg' /> Unique, handmade bracelet</li>
            </ul>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-12 mt-4 mb-4 text-center">
              <div className="button-shared">
                  <a href="/donate" className="theme-btn">donate
                      now</a>
              </div>
          </div>
      </div>
    </div>,
  
    <div className='container text-center mt-3'>
      <div className="row">
        <div className="col">
          <img  src={img2} alt="2"/>
        </div>
      </div>
      <div className="row">
          <div className="col mt-3">
            <h1>{title2}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col mb-3">
            <h1>{amount2}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col mb-3">
            <ul>
              <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Get your name on our wall</li>
              <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Plant a tree in your name with name-tag</li>
              <li><img className='packages-svg' src='/images/times-circle-regular.svg' /> Unique, handmade bracelet</li>
            </ul>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-12 mt-4 mb-4 text-center">
              <div className="button-shared">
                  <a href="/donate" className="theme-btn">donate
                      now</a>
              </div>
          </div>
      </div>
    </div>,
  
    <div className='container text-center mt-3'>
      <div className="row">
        <div className="col">
          <img  src={img3} alt="3"/>
        </div>
      </div>
      <div className="row">
          <div className="col mt-3">
            <h1>{title3}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col mb-3">
            <h1>{amount3}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col mb-3">
            <ul>
              <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Get your name on our wall</li>
              <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Plant <b>three trees</b> in your name with name-tags</li>
              <li><img className='packages-svg' src='/images/times-circle-regular.svg' /> Unique, handmade bracelet</li>
            </ul>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-12 mt-4 mb-4 text-center">
              <div className="button-shared">
                  <a href="/donate" className="theme-btn">donate
                      now</a>
              </div>
          </div>
      </div>
    </div>,
  
    <div className='container text-center mt-3'>
      <div className="row">
        <div className="col">
          <img  src={img4} alt="4" />
        </div>
      </div>
      <div className="row">
          <div className="col mt-3">
            <h1>{title4}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col mb-3">
            <h1>{amount4}</h1>
          </div>
      </div>
      <div className="row">
          <div className="col mb-3">
            <ul>
              <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Get your name on our wall</li>
              <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Plant <b>five trees</b> in your name with name-tags</li>
              <li><img className='packages-svg' src='/images/check-circle-regular.svg' /> Unique, handmade bracelet</li>
            </ul>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-12 mt-4 mb-4 text-center">
              <div className="button-shared">
                  <a href="/donate" className="theme-btn">donate
                      now</a>
              </div>
          </div>
      </div>
    </div>,
  ];


  return (
    <section className='packages-container'>
      <div className="container ">
        <div className='row'>
          <div className='col-md text-center'>
            <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
            </div>
            <h1>{mainTitle}</h1>
            <p className="section__meta">give a little, help a lot</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 packagesArea-container mt-5'>
              { hasMounted &&
                <Carousel slides={slides} />
              }
          </div>
        </div>
      </div>
    </section>
  )
}

export default PackagesArea;