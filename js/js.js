
var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescInp = document.getElementById("productDesc");

var btnAdd = document.getElementById("btnAdd");

var rowData = document.getElementById("row");

var rowSearch = document.getElementById("rowSearch");

var searchInp = document.getElementById("searchInp");

var nom = 0;
var x;

if (JSON.parse(localStorage.getItem("x")) == null) {

    x = [];
}

else 
{
    x = JSON.parse(localStorage.getItem("x"));
    addToPage();

}

searchInp.onkeyup = function()
{
    searchProduct(searchInp.value);
}

btnAdd.onclick = function()
{
    if(btnAdd.innerHTML == "Add product")
    {
        addProduct();
        storeData();
        addToPage();
    }
    else if(btnAdd.innerHTML == "Update")
    {
        updateProduct();
    }
}


function addProduct()
{
    var product = 
    {
        name:productNameInp.value,
        price:productPriceInp.value,
        company:productCompanyInp.value,
        desc:productDescInp.value,
    }
    x.push(product);
}

function addToPage()
{
    var tempAdd = "";
    for (var i = 0 ; i < x.length ; i++)
    {
        tempAdd += '<div class="col-md-3"><div class="product"><h4>'+x[i].name+'</h4><p class="text-danger">'+x[i].price+'$</p><p class="text-info">'+x[i].company+'</p><p>'+x[i].desc+'</p><button class="btn btn-warning my-1" onclick = "getProduct('+i+')">Update product</button><button class="btn btn-danger my-1" onclick = "deleteProduct('+i+')">Delete product</button></div></div>';
    }
    rowData.innerHTML= (tempAdd);
    nom = i;
}

function storeData()
{
    localStorage.setItem("x", JSON.stringify(x));
}

function getProduct(nd)
{
    productNameInp.value = x[nd].name;
    productPriceInp.value = x[nd].price;
    productCompanyInp.value = x[nd].company;
    productDescInp.value = x[nd].desc;
    btnAdd.innerHTML = ("Update");
    nom = nd;
}

function updateProduct()
{
    x[nom].name = productNameInp.value;
    x[nom].price = productPriceInp.value;   
    x[nom].company = productCompanyInp.value;   
    x[nom].desc = productDescInp.value;
    storeData();
    addToPage();
    btnAdd.innerHTML = ("Add product");
}

function deleteProduct(nom)
{
    x.splice(nom,1);
    storeData();
    addToPage();
}

function searchProduct(ex)
{
    var tempSearch = "";
    for(var i = 0 ; i < x.length ; i++)
    {
        if (x[i].name.includes(ex))
        {
            tempSearch += '<div class="col-md-3"><div class="product"><h4>'+x[i].name+'</h4><p class="text-danger">'+x[i].price+'</p><p class="text-info">'+x[i].company+'</p><p>'+x[i].desc+'</p><button class="btn btn-warning my-1" onclick = "getProduct('+i+')">Update product</button><button class="btn btn-danger my-1" onclick = "deleteProduct('+i+')">Delete product</button></div></div>';
            rowSearch.innerHTML = (tempSearch);
        }
        /*else if (x[i].price.includes(ex))
        {
            tempSearch += '<div class="col-md-3"><div class="product"><h4>'+x[i].name+'</h4><p class="text-danger">'+x[i].price+'</p><p class="text-info">'+x[i].company+'</p><p>'+x[i].desc+'</p><button class="btn btn-warning my-1" onclick = "getProduct('+i+')">Update product</button><button class="btn btn-danger my-1" onclick = "deleteProduct('+i+')">Delete product</button></div></div>';
            rowSearch.innerHTML = (tempSearch);
        }
        else if (x[i].company.includes(ex))
        {
            tempSearch += '<div class="col-md-3"><div class="product"><h4>'+x[i].name+'</h4><p class="text-danger">'+x[i].price+'</p><p class="text-info">'+x[i].company+'</p><p>'+x[i].desc+'</p><button class="btn btn-warning my-1" onclick = "getProduct('+i+')">Update product</button><button class="btn btn-danger my-1" onclick = "deleteProduct('+i+')">Delete product</button></div></div>';
            rowSearch.innerHTML = (tempSearch);
        }
        else if (x[i].desc.includes(ex))
        {
            tempSearch += '<div class="col-md-3"><div class="product"><h4>'+x[i].name+'</h4><p class="text-danger">'+x[i].price+'</p><p class="text-info">'+x[i].company+'</p><p>'+x[i].desc+'</p><button class="btn btn-warning my-1" onclick = "getProduct('+i+')">Update product</button><button class="btn btn-danger my-1" onclick = "deleteProduct('+i+')">Delete product</button></div></div>';
            rowSearch.innerHTML = (tempSearch);
        }*/

    }

}
