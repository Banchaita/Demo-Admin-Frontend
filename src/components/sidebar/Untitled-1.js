<Sider
style={{
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
  background: 'linear-gradient(to right, #da4453, #89216b)',
  // position:'fixed',
  height: '150vh',
  left: 0,
  zIndex: 999,

}}
breakpoint="md"
width="250"
collapsedWidth="75"
theme='light'>
<div className="logo text-center" >
  <div class="navbar-header " data-logobg="skin6">
    <a class="navbar-brand">
      <img src={logo} alt="homepage" style={{ width: '250px', height: '125px' }} />
    </a>
    <a class="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
      href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
  </div>
</div>
<Menu
  className="mt-3"
  style={{ background: "linear-gradient(to right, #da4453, #89216b)", color: '#fff' }}
  selectedKeys={[page]}
  selectable={true}
  mode="inline">
  {NavItems.map((menuItem) =>
    <>
    
      {
      // console.log(menuItem.name && menuItem  || menuItem.name && adminitertor_data.privileged )
      
      (menuItem.name && !menuItem.length  || menuItem.name && adminitertor_data.privileged)   ?
          <Menu.Item
            key={menuItem.name || menuItem.name && adminitertor_data.privileged }
            icon={menuItem.icon}
            style={{
              listStyleType: 'none',
              padding: '1rem 2rem',
            }}
            onClick={() => {
              setPage(menuItem.link)
              history.push(menuItem.link)
            }}>
            {menuItem.name}
          </Menu.Item> :
          null
      }
    </>
  )}
  {NavItems.map((menuItem) =>
      <>
      {            
      (menuItem.name == adminitertor_data.privileged[0]) ? 'ddff' :'rrr'
        // console.log(adminitertor_data.privileged.includes(adminitertor_data.privileged))
        // console.log(menuItem.name && adminitertor_data.privileged.indexOf(this[0]) > -1)
        // console.log(adminitertor_data.privileged.filter(e => menuItem.indexOf(e) !== -1))
        // console.log('dddfdd',menuItem.name ,'ddd', adminitertor_data.privileged[0])
        // if(adminitertor_data){
        //   adminitertor_data.map((key) => {
        //     if(key._id == adminitertor_data._id){
        //       setPrivileged(key.privileged)
        //   console.log(setPrivileged)
        //     }
        //   })
        // }

      //  (menuItem.name.length  && adminitertor_data.privileged ) 
      //  ?
      //   <Menu.Item
      //     key={menuItem.name  && adminitertor_data.privileged }
      //     style={{
      //       listStyleType: 'none',
      //       padding: '1rem 2rem',
      //     }}
      //     onClick={() => {
      //       setPage(menuItem.link )
      //       history.push(menuItem.link)
      //     }}>
      //     {menuItem.name && adminitertor_data.privileged }
      //   </Menu.Item> 
      //      :
      //   <Menu.Item
      //   key={menuItem.name && !adminitertor_data.privileged}
      //   style={{
      //     display:'none',
      //     listStyleType: 'none',
      //     padding: '1rem 2rem',
      //   }}
      //   onClick={() => {
      //     setPage(menuItem.link)
      //     history.push(menuItem.link)
      //   }}>
      //   {menuItem.name && adminitertor_data.privileged}
      // </Menu.Item> }
      // console.log('----->>>>>',menuItem.name === adminitertor_data.privileged)
                // console.log("--->>>>>>>>",menuItem.name && menuItem.name || menuItem.name == adminitertor_data.privileged )
                // console.log("--->>>>>>>>",menuItem.name ==! adminitertor_data.privileged )
               
                (menuItem.name == adminitertor_data.privileged)
                // (menuItem.name && !menuItem.name || menuItem.name == adminitertor_data.privileged )
                ?
                console.log(menuItem.name ,'------------',adminitertor_data.privileged)
                
                // console.log(menuItem.name == adminitertor_data.privileged)


                  // <Menu.Item
                  //   key={menuItem.name == adminitertor_data.privileged}
                  //   icon={menuItem.icon}
                  //   style={{
                  //     listStyleType: 'none',
                  //     padding: '1rem 2rem',
                  //   }}
                  //   onClick={() => {
                  //     setPage(menuItem.link)
                  //     history.push(menuItem.link)
                  //   }}>
                  //   {menuItem.name && adminitertor_data.privileged}
                  // </Menu.Item>
                  :
                  console.log('1111')
                // <Menu.Item
                //   key={menuItem.name == !adminitertor_data.privileged}
                //   style={{
                //     listStyleType: 'none',
                //     display:'none',
                //     padding: '1rem 2rem',
                //   }}
                //   onClick={() => {
                //     setPage(menuItem.link)
                //     history.push(menuItem.link)
                //   }}>
                //   {menuItem.name && adminitertor_data.privileged}
                // </Menu.Item>
         
      }
      </>

  //)}


  //{
    
    /* if (adminitertor_data) {
      adminitertor_data.map((key) => {
          if(key._id == adminitertor_data._id){
            setPrivileged(key.privileged)
            console.log(setPrivileged)
          }
      })
   
      {/* {NavItems.map((menuItem) => {
            for (let i = 0; i < menuItem.length; i++) {
              for (let j = 0; j < adminitertor_data.privileged.length; j++) {
                if (menuItem[i] == adminitertor_data.privileged[j]) {
                  console.log(adminitertor_data.privileged[j])
                  return true;
                }
              }
            }
            if (menuItem.name == adminitertor_data.privileged) {
              console.log(menuItem.name)
            } */
          //}




           // {
              
              /* // var filteredArray = menuItem.filter(myCallBack);
            // function myCallBack(el) { *///}
           //{/* //   console.log(myCallBack)
            //   return  adminitertor_data.privileged.indexOf(el) < 0;
            // }


            //   var filtered = [0,1].filter(
            //     function(e) { */}
            //{/* //       return this.indexOf(e) < 0;
            //     },
            //     // [2, 4]
            // );
            // console.log(filtered);
            // var menuItem = new Set(menuItem).intersection(adminitertor_data.privileged).keys();
            // console.log(menuItem)

            //   var menuItem = $.grep(menuItem, function(element) { */}
//{/* //     return $.inArray(element, adminitertor_data.privileged ) !== -1;
            // });
            // var filteredKeywords = menuItem.filter((name) => !adminitertor_data.privileged.includes(name));
            // console.log(filteredKeywords)

            // var filteredArray  = adminitertor_data.privileged.filter(function(array_el){ */}
            //{/* //   return adminitertor_data.privileged.filter(function(anotherOne_el){ *///}
            //{/* //      return adminitertor_data.privileged.id == menuItem.id;
            //   }).length == 0
            // });
            // console.log(filteredArray)
          //    
            // var res = menuItem.filter(item => !adminitertor_data.privileged.includes(item));
            // console.log(res)

            // let yFilter = menuItem.map(menuItem => { return menuItem.val; });
            // let filteredX = adminitertor_data.privileged.filter(adminitertor_data.privileged => !yFilter.includes(adminitertor_data.privileged.val));
            // console.log(filteredX);

            // let result = menuItem.every(function (element) {
            //   return adminitertor_data.privileged.includes(element);
            // });
            
            // console.log(result); */}

          //}
          



         // )}

 // } */}


</Menu>
</Sider>

