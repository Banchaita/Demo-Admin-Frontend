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
          {NavItems.map((menu) =>
            <>

              {
                // console.log("--->>>>>>>>",menu.name && menu.name || menu.name == adminitertor_data.privileged )
                (menu.name && !menu.lenght) ?
                  <Menu.Item
                    key={menu.name}
                    icon={menu.icon}
                    style={{
                      listStyleType: 'none',
                      padding: '1rem 2rem',
                    }}
                    onClick={() => {
                      setPage(menu.link)
                      history.push(menu.link)
                    }}>
                    {menu.name}
                  </Menu.Item> :
                  null
                // <Menu.Item
                //   key={menu.name ===adminitertor_data.privileged}
                //   icon={menu.icon}
                //   style={{
                //     listStyleType: 'none',
                //     padding: '1rem 2rem',
                //   }}
                //   onClick={() => {
                //     setPage(menu.link)
                //     history.push(menu.link)
                //   }}>
                //   {menu.name}
                // </Menu.Item>

              }

            </>
          )}
          {/* {NavItems.map((menuItem) =>{
                var  result = menuItem.filter(o => adminitertor_data.privileged.some(({id,name}) => o.id === id && o.name === name))
          )} */}

          {NavItems.map((menuItem) =>
            <>

              {
                // console.log("--->>>>>>>>",menuItem.name && adminitertor_data.privileged) 
                // console.log("--->>>>>>>>",menuItem.name && adminitertor_data.privileged) 


                // (menuItem.name && adminitertor_data.privileged) ?
                //   <Menu.Item
                //     key={menuItem.name}
                //     icon={menuItem.icon}
                //     style={{
                //       listStyleType: 'none',
                //       padding: '1rem 2rem',
                //     }}
                //     onClick={() => {
                //       setPage(menuItem.link)
                //       history.push(menuItem.link)
                //     }}>
                //     {menuItem.name}
                //   </Menu.Item> :
                // <Menu.Item
                //   key={menuItem.name === adminitertor_data.privileged}
                //   icon={menuItem.icon}
                //   style={{
                //    display:'none',
                //     listStyleType: 'none',
                //     padding: '1rem 2rem',
                //   }}
                //   onClick={() => {
                //     setPage(menuItem.link)
                //     history.push(menuItem.link)
                //   }}>
                //   {menuItem.name}
                // </Menu.Item>

              }

            </>
          )}


          {NavItems.map((menuItem) => {
            for (let i = 0; i < menuItem.length; i++) {
              for (let j = 0; j < adminitertor_data.privileged.length; j++) {
                if (menuItem[i] == adminitertor_data.privileged[j]) {
                  console.log(menuItem, '======', adminitertor_data.privileged)
                  return true;
                }
              }
            }
            if (menuItem.name == adminitertor_data.privileged) {
              console.log(menuItem.name)
            }
            // var filteredKeywords = menuItem.filter((name) => !adminitertor_data.privileged.includes(name));
            // console.log(filteredKeywords)

            // var filteredArray  = adminitertor_data.privileged.filter(function(array_el)
            //   return adminitertor_data.privileged.filter(function(anotherOne_el)
            //     return adminitertor_data.privileged.id == menuItem.id;
            //   }).length == 0
            // });
            // console.log(filteredArray)

            // var obj = {}, matched = [],
            //   unmatched = [];
            // for (var i = 0, l = menuItem.length; i < l; i++) {
            //   obj[menuItem[i]] = (obj[menuItem[i]] || 0) + 1;
            // }
            // for (i = 0; i < adminitertor_data.privileged.length; i++) {
            //   var val = adminitertor_data.privileged[i];
            //   if (val in obj) {
            //     matched.push(val);
            //   } else {
            //     unmatched.push(val);
            //   }
            //   console.log(matched,'--------',unmatched)

            //   console.log(matched == unmatched)
            // }

            // const results = menuItem.filter(({ value: name }) => !adminitertor_data.privileged.some(({ value: name }) => name === name));
            // console.log(results);

            //   var result = menuItem.filter(function (o1) {
            //     return adminitertor_data.privileged.some(function (o2) {
            //         return o1.id === o2.id; // return the ones with equal id
            //    });
            // });
            // let result = menuItem.filter(o1 => adminitertor_data.privileged.some(o2 => o1.id === o2.id))
            // console.log(result)

            // let j = 0;
            // for (let i = 0; i < menuItem.length; i++) {
            //   let possiblyMissingKey = menuItem[i].a;
            //   while (adminitertor_data.privileged[j].a < possiblyMissingKey && j < adminitertor_data.privileged.length)
            //     j++;
            //   if (adminitertor_data.privileged[j].a != possiblyMissingKey) {
            //     let itemToInsert = { a: possiblyMissingKey, b: 0 };
            //     adminitertor_data.privileged.splice(j, 0, itemToInsert);
            //   }
            //   console.log(j )
            // }

            // let map = {};
            // menuItem.forEach(i => map[i] = false);
            // adminitertor_data.privileged.forEach(i => map[i] === false && (map[i] = true));
            // let jsonArray = Object.keys(map).map(k => ({ name: k, matched: map[k] }));

            // console.log(jsonArray)

          //   var filteredArray  = menuItem.filter(function(menuItem_el){
          //     return adminitertor_data.privileged.filter(function(anotherOne_el){
          //         return adminitertor_data.privileged.namd == menuItem_el.name;
          //     }).length == 0
          // });
          
          // console.log(filteredArray)

          // var common = $.grep(menuItem, function(element) {
          //   return $.inArray(element,  adminitertor_data.privileged ) !== -1;
          //   });
          if (privileged === '[object Array]') {
            for (var i = 0; i < menuItem; i++) {
              // Compare the item
            }
          } else {
            for (var key in adminitertor_data.privileged) {
              if (adminitertor_data.privileged.hasOwnProperty(key)) {
                
                console.log(key)
              }
            }
          }




          }
          )}


















        </Menu>
</Sider>