import { useEffect, useState } from "react";
import "./orders-page.scss";

const OrdersPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ).then((value) => {
        return value.json();
      });
      setData(response);
    })();
  }, []);

  return (
    <div className="orders-page-wrapper">
      <div className="lorem-ipsum-div">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis
        cursus accumsan. Vivamus sodales ullamcorper ultrices. Cras iaculis
        tellus id tempus pulvinar. Nam sed vestibulum nulla. Aliquam viverra,
        purus non porttitor efficitur, magna augue venenatis tortor, in
        fermentum turpis orci eu neque. Donec tempus ac nulla suscipit sodales.
        Suspendisse eget placerat erat. Quisque vitae varius metus. Etiam ipsum
        risus, cursus ac tempus quis, consequat nec nisl. Fusce dolor augue,
        laoreet sed mi id, aliquet mollis orci. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer sed ipsum lorem. Morbi dapibus
        nisi at porttitor congue. Phasellus ullamcorper vehicula rutrum.
        Pellentesque varius, lacus eget laoreet mattis, mauris augue varius ex,
        non viverra ipsum est ut sapien. Nam magna lectus, luctus vel dolor ac,
        blandit tempor felis. Cras finibus malesuada urna eget commodo. Praesent
        consequat ultrices vulputate. Vivamus neque magna, consequat quis
        tincidunt id, varius ut massa. Donec hendrerit magna nec pharetra
        suscipit. Fusce vitae dapibus elit, eu dictum mi. Curabitur euismod,
        erat sed ullamcorper pellentesque, dolor lectus sodales metus, a luctus
        mi nulla sit amet orci. Ut elementum est vitae sem porta, quis feugiat
        lectus viverra. Aenean in urna metus. Quisque faucibus, libero vel
        bibendum auctor, libero nibh sodales nibh, a pharetra purus orci id
        ipsum. Etiam sodales sit amet lorem vitae faucibus. Donec vel mi ut
        sapien bibendum malesuada ac a lacus. Donec tincidunt sem molestie ante
        vehicula ornare. Donec quis tellus quis mauris aliquet blandit. In vel
        lectus maximus, mollis lacus nec, sollicitudin nulla. Praesent eu
        pellentesque nisl, nec pharetra odio. Vivamus malesuada rutrum nulla ac
        imperdiet. Donec molestie lorem a nibh hendrerit ultrices. Aenean cursus
        nulla tellus, vitae egestas felis tincidunt ac. Sed hendrerit tellus et
        mauris congue, ac ornare elit sodales. Nullam ac ullamcorper lorem. Ut
        finibus, ante at auctor fringilla, orci risus lacinia risus, a imperdiet
        leo velit et augue. Ut in massa a metus tincidunt auctor a malesuada
        sem. Ut ornare enim vel posuere tristique. Nulla rutrum eget erat ac
        suscipit. Pellentesque mattis, libero vel commodo laoreet, nibh nibh
        imperdiet neque, eu mollis nibh mauris ac sapien. Morbi sit amet enim
        dictum, pharetra arcu vitae, viverra magna. In a posuere ipsum. Integer
        lorem ex, aliquet in iaculis et, ultrices ut nisi. Aliquam a efficitur
        mauris. Nunc vel pulvinar lorem. Nunc at lectus tincidunt, sollicitudin
        odio eu, egestas massa. Nulla eu sollicitudin tellus. Phasellus euismod
        blandit ex, ac viverra quam pellentesque at. Morbi in varius nunc.
        Quisque fermentum est ac libero consectetur, ut feugiat neque dignissim.
        Morbi at justo sed mi laoreet gravida a et libero. Donec ipsum lacus,
        sollicitudin in dui at, aliquam aliquam nisl. Praesent hendrerit
        placerat quam, sit amet tincidunt leo tempus nec. Vivamus quis ipsum a
        libero scelerisque aliquam sit amet vitae nulla. Duis non sem in libero
        finibus suscipit. Suspendisse porta arcu dolor, eleifend condimentum
        nisl rhoncus a. Nulla posuere at augue id ultrices. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Quisque ultrices, sapien quis suscipit accumsan, nibh elit scelerisque
        tortor, eget aliquet mi arcu eget purus. Donec nisl urna, tempus quis
        eleifend eget, finibus sit amet lectus. Duis molestie urna nec sapien
        pretium ornare. Nulla dignissim ex eget ex vestibulum lacinia bibendum
        vel massa. Maecenas scelerisque erat non nulla interdum aliquet.
        Suspendisse efficitur eros arcu, id euismod dui faucibus vitae.
      </div>
      <div className="data-wrapper">
        {data.map((value: any) => {
          return (
            <div key={value.id} className="data-item">
              <div>{value.title}</div>
              <div>{value.userId}</div>
            </div>
          );
        })}
      </div>
      <div className="lorem-ipsum-div">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis
        cursus accumsan. Vivamus sodales ullamcorper ultrices. Cras iaculis
        tellus id tempus pulvinar. Nam sed vestibulum nulla. Aliquam viverra,
        purus non porttitor efficitur, magna augue venenatis tortor, in
        fermentum turpis orci eu neque. Donec tempus ac nulla suscipit sodales.
        Suspendisse eget placerat erat. Quisque vitae varius metus. Etiam ipsum
        risus, cursus ac tempus quis, consequat nec nisl. Fusce dolor augue,
        laoreet sed mi id, aliquet mollis orci. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Integer sed ipsum lorem. Morbi dapibus
        nisi at porttitor congue. Phasellus ullamcorper vehicula rutrum.
        Pellentesque varius, lacus eget laoreet mattis, mauris augue varius ex,
        non viverra ipsum est ut sapien. Nam magna lectus, luctus vel dolor ac,
        blandit tempor felis. Cras finibus malesuada urna eget commodo. Praesent
        consequat ultrices vulputate. Vivamus neque magna, consequat quis
        tincidunt id, varius ut massa. Donec hendrerit magna nec pharetra
        suscipit. Fusce vitae dapibus elit, eu dictum mi. Curabitur euismod,
        erat sed ullamcorper pellentesque, dolor lectus sodales metus, a luctus
        mi nulla sit amet orci. Ut elementum est vitae sem porta, quis feugiat
        lectus viverra. Aenean in urna metus. Quisque faucibus, libero vel
        bibendum auctor, libero nibh sodales nibh, a pharetra purus orci id
        ipsum. Etiam sodales sit amet lorem vitae faucibus. Donec vel mi ut
        sapien bibendum malesuada ac a lacus. Donec tincidunt sem molestie ante
        vehicula ornare. Donec quis tellus quis mauris aliquet blandit. In vel
        lectus maximus, mollis lacus nec, sollicitudin nulla. Praesent eu
        pellentesque nisl, nec pharetra odio. Vivamus malesuada rutrum nulla ac
        imperdiet. Donec molestie lorem a nibh hendrerit ultrices. Aenean cursus
        nulla tellus, vitae egestas felis tincidunt ac. Sed hendrerit tellus et
        mauris congue, ac ornare elit sodales. Nullam ac ullamcorper lorem. Ut
        finibus, ante at auctor fringilla, orci risus lacinia risus, a imperdiet
        leo velit et augue. Ut in massa a metus tincidunt auctor a malesuada
        sem. Ut ornare enim vel posuere tristique. Nulla rutrum eget erat ac
        suscipit. Pellentesque mattis, libero vel commodo laoreet, nibh nibh
        imperdiet neque, eu mollis nibh mauris ac sapien. Morbi sit amet enim
        dictum, pharetra arcu vitae, viverra magna. In a posuere ipsum. Integer
        lorem ex, aliquet in iaculis et, ultrices ut nisi. Aliquam a efficitur
        mauris. Nunc vel pulvinar lorem. Nunc at lectus tincidunt, sollicitudin
        odio eu, egestas massa. Nulla eu sollicitudin tellus. Phasellus euismod
        blandit ex, ac viverra quam pellentesque at. Morbi in varius nunc.
        Quisque fermentum est ac libero consectetur, ut feugiat neque dignissim.
        Morbi at justo sed mi laoreet gravida a et libero. Donec ipsum lacus,
        sollicitudin in dui at, aliquam aliquam nisl. Praesent hendrerit
        placerat quam, sit amet tincidunt leo tempus nec. Vivamus quis ipsum a
        libero scelerisque aliquam sit amet vitae nulla. Duis non sem in libero
        finibus suscipit. Suspendisse porta arcu dolor, eleifend condimentum
        nisl rhoncus a. Nulla posuere at augue id ultrices. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Quisque ultrices, sapien quis suscipit accumsan, nibh elit scelerisque
        tortor, eget aliquet mi arcu eget purus. Donec nisl urna, tempus quis
        eleifend eget, finibus sit amet lectus. Duis molestie urna nec sapien
        pretium ornare. Nulla dignissim ex eget ex vestibulum lacinia bibendum
        vel massa. Maecenas scelerisque erat non nulla interdum aliquet.
        Suspendisse efficitur eros arcu, id euismod dui faucibus vitae.
      </div>
    </div>
  );
};

export default OrdersPage;
