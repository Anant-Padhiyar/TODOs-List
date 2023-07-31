import React, { useState, useEffect } from 'react';

const Homepage = ({ mode, handleToggleMode, heading}) => {
  const [Title, setTitle] = useState('');
  const [Desc, setDesc] = useState('');
  const [Items, setItems] = useState([]);
  const [i,setI] = useState([]);
  const [EditTitle, setEditTitle] = useState(''); // Separate state for modal title
  const [EditDesc, setEditDesc] = useState(''); // Separate state for modal description

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const getAndpdate = () => {
if(Title!=='' || Desc !==''){
    let itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson')) || [];
    itemsJsonArray.push([Title, Desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    setTitle('');
    setDesc('');
    update();
}
else{
  alert('Title And Description are Empty')
}
  };

  const Edited = (index) => {
    setI(index); 
    // console.log('index = '+i)
    const item = Items[index];
    // console.log(item)
    setTitle(item[0]);
    setDesc(item[1]);
  };

  const EditUpdate = ()=>{
    // console.log('index = '+i)
    let itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson'))
    itemsJsonArray.splice(i,1,[Title,Desc]);
    setTitle('');
    setDesc('')
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    update();
}

  const update = () => {
    let itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson')) || [];
    setItems(itemsJsonArray);
    // console.table(itemsJsonArray);
  };

const handleDelete = (index) => {
if (confirm('Do you really want to Delete This Note?')) {
let itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson')) || [];
itemsJsonArray.splice(index, 1);
localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
update();
  }
  };

  useEffect(() => {
    update();
  }, []);

  const clearstorage = () => {
    if (confirm('Do you really want to ClearList?')) {
      // console.log('clear');
      localStorage.removeItem('itemsJson');
      update();
    }
  };

  return (
<div className="container">
<h2 className="text-center mt-3" style={{ color: mode === 'light' ? 'black' : 'white' }}>
TODOs List
</h2>

<div className="mb-2 mx-2">
<label htmlFor="title" className="form-label">
TODO Title
</label>
<input type="text" className="form-control" id="title" value={Title} onChange={handleTitleChange}
style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}/>
</div>

<div className="mb-3 mx-2">
<label htmlFor="desc" className="form-label">
TODO Description
</label>
<textarea className="form-control" id="desc" rows="3" value={Desc} onChange={handleDescChange}
style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}></textarea>
</div>

<div className="text-center mt-3 mb-3">
<button type="submit" id="add" className="btn btn-success mx-4" onClick={getAndpdate}>Submit</button>
<button type="submit" id="clear" className="btn btn-danger mx-4" onClick={clearstorage}>Clear List</button>
</div>

<div id="items" className="">
<table className={`table table-sm custom-table ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}>
<thead>
<tr>
<th scope="col">SNO</th>
<th scope="col">Title</th>
<th scope="col">Description</th>
<th scope="col">Edit</th>
<th scope="col">Delete</th>
</tr>
</thead>
<tbody>
{Items.map((item, index) => 
<tr key={index}>
<th scope="row">{index + 1}</th>
<td>{item[0]}</td>
<td>{item[1]}</td>
<td>
<button className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => Edited(index)}>Edit</button>
</td>
<td>
<button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
</td>
</tr>
)}
</tbody>
</table>
</div>

<div className="">
<div className={`modal fade ${mode === 'light' ? 'light-mode' : 'dark-mode'}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div className="modal-body">
<div className="mb-3">
<label htmlFor="EditT" className="form-label">TODO Title</label>
<input type="text" className="form-control" id="EditT" aria-describedby="emailHelp" value={Title} onChange={handleTitleChange}
style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}/>
</div>
<div className="mb-3">
<label htmlFor="EditD" className="form-label">TODO Description</label>
<textarea className="form-control" id="EditD" rows="3" value={Desc} onChange={handleDescChange}
style={{ backgroundColor: mode === 'light' ? 'white' : 'black', color: mode === 'light' ? 'black' : 'white' }}></textarea>
</div>
<div className="text-center mb-1">
<button type="submit" id="update" className="btn btn-success text-center" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={EditUpdate}>Update
</button>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
  );
};

export default Homepage;

