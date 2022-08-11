import { Link } from 'react-router-dom';

function Navigation(){
    return(

//         <header>

// <div>
//            <nav>
//             <ul>
//                 <li>
//                     <Link to ='/'>Welcome</Link>
//                 </li>

//                 <li>
//                     <Link to ='/inclusion'>Inclusion</Link>
//                 </li>

//                 <li>
//                     <Link to ='/classroom'>Classroom</Link>
//                 </li>

//                 <li>
//                     <Link to ='/lessons'>Lesson samples</Link>
//                 </li>
//             </ul>
//            </nav>
//         </div>
//         </header>
<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">TeachSpace</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/inclusion">Inclusion</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/classroom">Classroom</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/lessons">Samples</a>
      </li>
    </ul>
  </div>
</div>
</nav>

    )
}

export default Navigation;