
// get element
const product_form = document.querySelector('#product_form');
const msg = document.querySelector('.msg');
const product_list = document.getElementById('product_list');

// get all product
const getAllproducts = () => {

  // get all ls data
  const data = readLSData('product');


   // validate
  if(!data){
  
    product_list.innerHTML =`
    <tr>
        <td colspan="7" class="text-center"> No product found </td>
    </tr>
    `;

  }

  // show all data to list
  if (data){
    let list = '';
    data.map((item,index) =>{
      list += `
      <tr>
        <td>${ index + 1 }</td>
        <td><img style="width:60px; height:60px; object-fit:cover" src="${ item.photo}" alt=""></td>
        <td>${ item.name }</td>
        <td>${ item.price }</td>
        <td>${ item.quntity }</td>
        <td>${ item.price*item.quntity }</td>
        <td>
            <a class="btn btn-info btn-sm" href=""><i class="fas fa-eye"></i></a>
            <a class="btn btn-warning btn-sm" href=""><i class="fas fa-edit"></i></a>
            <a class="btn btn-info btn-danger" href=""><i class="fas fa-trash"></i></a>
        </td>
  </tr>
      `;

    });
    product_list.innerHTML = list;
  }
}

getAllproducts();

// submit product

product_form.onsubmit = (e) =>{
    e.preventDefault();

    // get form data formdata object
    let form_data = new FormData(e.target);
    let productData = Object.fromEntries(form_data.entries());
    let { name, price, photo, quntity} = Object.fromEntries(form_data.entries());
  
  


  // form validation

if( !name || !price || !photo || !quntity ) {
    msg.innerHTML = setAlert('All fields are requires !');

}else{
 
    createLSData('product', productData)
   msg.innerHTML = setAlert('data stable !','success');
   e.target.reset();
   getAllproducts();
}

}













