//take two
      const helloFunction = () => {
        let str = "";
        return () => {
          str += "hello";
          console.log(str);
        }
      }

      const moreHello = helloFunction();


        //take one
      // const helloFunction = () => {
      //   let str = "";
      //   return () => {
      //     let hello = "hello";
      //     console.log((str += hello));

      //   };
      // };

      // const maddHellos = helloFunction(); //stores helloFunction
