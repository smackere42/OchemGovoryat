import { useState, useEffect } from 'react';
import LeftTop from '../LeftTop/LeftTopContent';
import PopUp from '../PopUp/PopUp';
import Preloader from '../Preloader/Preloader';
import { useRouter } from 'next/router';
import RightBottom from '../RightBottom/RightBottom';
import AboutMap from '../AboutMap/AboutMap';
import InfoModal from '../Infopage/InfoModal'

const Map = () => {
  const [loading, setLoading] = useState(true);

  const [index, setIndex] = useState(5);
  const router = useRouter();
  const { query } = router;
  const city = parseInt(query.city || -1);

  // const popupt = document.getElementById('pop-container');
  // const closeBut = document.getElementById('pop-toggle');

  const popShow = (i) => {
    const popupt = document.getElementById('pop-container');
    popupt.classList.remove('popHide');
    popupt.classList.add('popShow');
    setIndex(i);
  };


  const onKeyUpHandler = (e) => {
      if (e.key === 'Escape') {
        const popupt = document.getElementById('pop-container');
        const closeBut = document.getElementById('pop-toggle');
        if ((popupt.classList.contains = 'popShow')) {
          if (city > -1)
          {
            router.push('/map', undefined, { shallow: true })
          } 
          popupt.classList.remove('popShow');
          popupt.classList.add('popHide');
        } else {
          return;
        }
      }};


    const onClickHandler = (e) => {
      const popupt = document.getElementById('pop-container');
      const closeBut = document.getElementById('pop-toggle');
      if (city > -1)
      {
        router.push('/map', undefined, { shallow: true })
      } 
      popupt.classList.remove('popShow');
      popupt.classList.add('popHide');
    }

  useEffect(() => {
    const closeBut = document.getElementById('pop-toggle');

    //Popup functions and events
    document.addEventListener('keyup', onKeyUpHandler);

    closeBut.addEventListener('click', onClickHandler);
    
    return () => {
      closeBut.removeEventListener('click', onClickHandler);
      document.removeEventListener('keyup', onKeyUpHandler);
    }
  }, [router])

  useEffect(() => {
    if ((city > -1 && city < 60) && city != 20)
      {
        popShow(city);
      }
  },[city])

  useEffect(() => {
    //map creating
    const map = L.map('map', { zoomControl: false });
    const popupt = document.getElementById('pop-container');
    const closeBut = document.getElementById('pop-toggle');
    const about = document.getElementById('aboutToggle');
    const modal = document.getElementById('modal');
    const modalToggle = document.getElementById('modalToggle');

    modalToggle.addEventListener('click', function () {
      modal.classList.remove('modalShow');
      modal.classList.add('modalHide');
    });

    about.addEventListener('click', function () {
      modal.classList.remove('modalHide');
      modal.classList.add('modalShow');
    });

    closeBut.addEventListener('click', function () { 
      popupt.classList.remove('popShow');
      popupt.classList.add('popHide');
    });

    //Popup functions and events
    const popShow = (i) => {
      popupt.classList.remove('popHide');
      popupt.classList.add('popShow');
      setIndex(i);
    };

    const preloaderTimeout = () =>{
      if (map.getZoom() == 5) {
        map.addLayer(HideGroup);
      }
      setTimeout(function() {
        setLoading(false);
      }, 2000);
    }

    map.setView(
      [-48.574779942522675, -136.49414062500003],
      5,
    );

    const layer = L.tileLayer('/static/mainMap/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 5,
      coninuousWorld: false,
      noWrap: true,
    }).on('load', preloaderTimeout).addTo(map);

    //markers icons
    const bigIcon = L.icon({
      iconUrl: 'https://i.ibb.co/C1gD993/marker1.png',
      iconSize: [25, 25],
    });

    const smallIcon = L.icon({
      iconUrl: 'https://i.ibb.co/Ky1Ghd5/marker2.png',
      iconSize: [20, 20],
    });

    //Stay on zoom 3 markers
    const Moscow = L.marker([-48.574779942522675, -136.49414062500003], {
      title: '????????????',
      alt: '????????????',
      icon: bigIcon,
      // role: 'presentation'
      id: '????????????',
    })
      .addTo(map)
      .on('click', function () {
        popShow(0);
      });

      Moscow._icon.id = 'Moscow';

    const Arkhangelsk = L.marker([-20.879312794023733, -131.5723002737236], {
      title: '??????????????????????',
      alt: '??????????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(50);
      });
    const Vorkuta = L.marker([-3.3414685626804896, -83.07342793159351], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(58);
      });
    const Dudinka = L.marker([3.6866311334852195, -42.02041557962842], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(8);
      });
    const Norilsk = L.marker([2.81140345335866, -23.554670175638197], {
      title: '????????????????',
      alt: '????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(57);
      });
    const Kyrsyr = L.marker([16.046698108002555, 45.08766540829648], {
      title: '??????????',
      alt: '??????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(17);
      });
    const Egvikenton = L.marker([-11.26472308086237, 150.73247384808545], {
      title: '??????????????????',
      alt: '??????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(45);
      });
    const Magadan = L.marker([-37.931262294554976, 90.60343648460767], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(19);
      });
    const Sakhalin = L.marker([-58.22001892412287, 73.64900014817076], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(30);
      });
    const Vladivostok = L.marker([-68.30192244213374, 52.95405825159546], {
      title: '??????????????????????',
      alt: '??????????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(5);
      });
    const Khabarovsk = L.marker([-61.7099788575673, 57.43695654654523], {
      title: '??????????????????',
      alt: '??????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(41);
      });
    const Lensk = L.marker([-44.402241836592964, 41.04490455063818], {
      title: '??????????',
      alt: '??????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(53);
      });
    const Yakutsk = L.marker([-31.50356046006714, 52.11917527372361], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(46);
      });
    const Viluisk = L.marker([-25.24472516548612, 37.705095449361785], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(59);
      });
    const Chita = L.marker([-56.26778799154057, 16.171892324361828], {
      title: '????????',
      alt: '????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(43);
      });
    const Irkutsk = L.marker([-54.927132584786264, -7.734305702552761], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(55);
      });
    const Jeleznogorsk = L.marker([-44.33959989884703, -17.578073026914566], {
      title: '????????????????????????',
      alt: '????????????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(10);
      });
    const Krasnoyars = L.marker([-48.69091774859271, -27.509748300638197], {
      title: '????????????????????',
      alt: '????????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(15);
      });
    const Omsk = L.marker([-52.1064853529081, -66.62111107436182], {
      title: '????????',
      alt: '????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(24);
      });
    const Nijnevartovsk = L.marker([-34.59696175406175, -58.9745920506382], {
      title: '??????????????????????????',
      alt: '??????????????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(22);
      });
    const Ilevsk = L.marker([-44.964226607475936, -106.0794453922059], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(49);
      });
    const Rubtsovsk = L.marker([-57.184251940810206, -48.51754800416088], {
      title: '????????????????',
      alt: '????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(28);
      });
    const Kirovsk = L.marker([-34.01626866154527, -144.05283832117087], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(21);
      });
    const Orenburg = L.marker([-57.51537782839484, -100.81054687500001], {
      title: '????????????????',
      alt: '????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(56);
      });
    const Saratov = L.marker([-58.17082172218224, -116.1944380133167], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(44);
      });
    const Bryansk = L.marker([-55.0287255988083, -146.51488458032668], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(47);
      });
    const Rostov = L.marker([-63.62673029702733, -128.67190964872364], {
      title: '????????????-????-????????',
      alt: '????????????-????-????????',
      icon: bigIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(27);
      });
    const Belgorod = L.marker([-58.65409724680968, -139.52643648494725], {
      title: '????????????????',
      alt: '????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(3);
      });
    const Semphiropol = L.marker([-66.30221196666434, -144.14059035127642], {
      title: '??????????????????????',
      alt: '??????????????????????',
      icon: smallIcon,
    })
      .addTo(map)
      .on('click', function () {
        popShow(31);
      });

    //clustered markers
    const Sterlitamak = L.marker([-51.9446033467141, -97.99787363138192], {
      title: 'C????????????????????',
      alt: '??????????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(34);
    });
    const StPiter = L.marker([-36.879594769189644, -150.8642924612236], {
      title: '??????????-??????????????????',
      alt: '??????????-??????????????????',
      icon: bigIcon,
    }).on('click', function () {
      popShow(1);
    });
    const SosnovyBor = L.marker([-38.68550976001201, -153.98437500000003], {
      title: '???????????????? ??????',
      alt: '???????????????? ??????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(33);
    });
    const GrtNovgorod = L.marker([-40.379979194200594, -147.30465285127642], {
      title: '?????????????? ????????????????',
      alt: '?????????????? ????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(4);
    });
    const Smolensk = L.marker([-49.89894121106609, -148.45059190246747], {
      title: '????????????????',
      alt: '????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(32);
    });
    const Cherepanovo = L.marker([-55.22905068737356, -38.759782949361814], {
      title: '????????????????????',
      alt: '??????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(42);
    });
    const Barnaul = L.marker([-56.60813433116198, -37.529054333934674], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(2);
    });
    const Novosybyrsk = L.marker([-49.20918606145877, -46.23185469894478], {
      title: '??????????????????????',
      alt: '??????????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(48);
    });
    const Kurgan = L.marker([-48.39996816384387, -81.5642670849046], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(16);
    });
    const Tumen = L.marker([-45.52120077784122, -81.3866841012764], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(39);
    });
    const Kamyshlov = L.marker([-43.89792730199825, -83.58398437500001], {
      title: '????????????????',
      alt: '????????????   ????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(13);
    });
    const Tomsk = L.marker([-46.67977018681898, -40.166015625], {
      title: '??????????',
      alt: '??????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(37);
    });
    const NijnyNovgorod = L.marker([-47.57653660824357, -123.66207472627643], {
      title: '????????????-????????????????',
      alt: '????????????-????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(23);
    });
    const Dzerjinsk = L.marker([-47.98995409201261, -129.11139742244725], {
      title: '??????????????????',
      alt: '??????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(7);
    });
    const Ekaterinburg = L.marker([-45.82876549287251, -93.16406250000001], {
      title: '????????????????????????',
      alt: '????????????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(9);
    });
    const Ufa = L.marker([-50.0641917366591, -99.31649287180907], {
      title: '??????',
      alt: '??????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(54);
    });
    const Kazan = L.marker([-48.748924046835434, -114.43357642563821], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(11);
    });
    const Sizran = L.marker([-52.74961327725039, -111.1816059762764], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(35);
    });
    const Zametchino = L.marker([-52.0254436980767, -117.86131946281914], {
      title: '??????????????????',
      alt: '??????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(25);
    });
    const Kaluga = L.marker([-51.01357177384563, -140.36576316162328], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(12);
    });
    const Lipetsk = L.marker([-55.0287255988083, -134.82312731520602], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(18);
    });
    const Uryupinst = L.marker([-60.54377524118842, -125.94733492244725], {
      title: '????????????????',
      alt: '??????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(40);
    });
    const Volgograd = L.marker([-62.268230740704446, -122.43094765052764], {
      title: '??????????????????',
      alt: '??????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(52);
    });
    const Krasnodar = L.marker([-66.01811005412588, -132.4542209626785], {
      title: '??????????????????',
      alt: '??????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(14);
    });
    const Tuapse = L.marker([-66.93007291509063, -133.06651019617087], {
      title: '????????????',
      alt: '????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(38);
    });

    // Hide on 3rd zoom
    const PereslavblZalesski = L.marker(
      [-44.65305862479442, -134.91210937500003],
      {
        title: '????????????????????-??????????????????',
        alt: '????????????????????-??????????????????',
        icon: smallIcon,
      }
    )
      .addTo(map)
      .on('click', function () {
        popShow(26);
      });
    const Astrahan = L.marker([-65.5857333734414, -116.54288212819097], {
      title: '??????????????????',
      alt: '??????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(51);
    });
    const Taganrog = L.marker([-63.548559425635524, -134.0331858006382], {
      title: '????????????????',
      alt: '????????????????',
      icon: smallIcon,
    }).on('click', function () {
      popShow(36);
    });
    const Voronej = L.marker([-55.57842132136231, -128.40820312500003], {
      title: '??????????????',
      alt: '??????????????',
      icon: smallIcon,
    })
    .on('click', function() {
        popShow(6);
      });
      const Ryazan = L.marker([-51.26278063365147, -132.36328125000003], {
        title: '????????????',
        alt: '????????????',
        icon: smallIcon,
      })
      .on('click', function() {
          popShow(29);
      });

    //create clusters
    const markers = L.markerClusterGroup({
      spiderfyOnMaxZoom: false,
      disableClusteringAtZoom: 4,
      spiderLegPolylineOptions: {
        weight: 0,
        color: '#1BA5D0',
        lineCap: 'butt',
        dashArray: '10 10',
        opacity: 0,
      },
      iconCreateFunction: function (cluster) {
        var childCount = cluster.getChildCount();
        var c = ' marker-cluster-';
        if (childCount < 3) {
          c += 'yellow';
        } else if (childCount < 4) {
          c += 'blue';
        } else if (childCount < 5) {
          c += 'sea';
        } else {
          c += 'pink';
        }
        return new L.DivIcon({
          html: '<div><span>' + '????????' + '</span></div>',
          className: 'marker-cluster' + c,
          iconSize: new L.Point(41, 41),
        });
      },
    });

    const markers2 = L.markerClusterGroup({
      spiderfyOnMaxZoom: false,
      disableClusteringAtZoom: 4,
      spiderLegPolylineOptions: {
        weight: 0,
        color: '#1BA5D0',
        lineCap: 'butt',
        dashArray: '10 10',
        opacity: 0,
      },
      iconCreateFunction: function (cluster) {
        var childCount = cluster.getChildCount();
        var c = ' marker-cluster-';
        if (childCount < 3) {
          c += 'pink';
        } else if (childCount < 4) {
          c += 'yellow';
        } else if (childCount < 5) {
          c += 'blue';
        } else {
          c += 'sea';
        }
        return new L.DivIcon({
          html: '<div><span>' + '????????' + '</span></div>',
          className: 'marker-cluster' + c,
          iconSize: new L.Point(40, 40),
        });
      },
    });

    const markers3 = L.markerClusterGroup({
      spiderfyOnMaxZoom: false,
      disableClusteringAtZoom: 4,
      spiderLegPolylineOptions: {
        weight: 0,
        color: '#1BA5D0',
        lineCap: 'butt',
        dashArray: '10 10',
        opacity: 0,
      },
      iconCreateFunction: function (cluster) {
        var childCount = cluster.getChildCount();
        var c = ' marker-cluster-';
        if (childCount < 3) {
          c += 'sea';
        } else if (childCount < 4) {
          c += 'pink';
        } else if (childCount < 5) {
          c += 'yellow';
        } else {
          c += 'blue';
        }
        return new L.DivIcon({
          html: '<div><span>' + '????????' + '</span></div>',
          className: 'marker-cluster' + c,
          iconSize: new L.Point(40, 40),
        });
      },
    });

    const markers4 = L.markerClusterGroup({
      spiderfyOnMaxZoom: false,
      disableClusteringAtZoom: 4,
      spiderLegPolylineOptions: {
        weight: 0,
        color: '#1BA5D0',
        lineCap: 'butt',
        dashArray: '10 10',
        opacity: 0,
      },
      iconCreateFunction: function (cluster) {
        var childCount = cluster.getChildCount();
        var c = ' marker-cluster-';
        if (childCount < 3) {
          c += 'blue';
        } else if (childCount < 4) {
          c += 'sea';
        } else if (childCount < 5) {
          c += 'pink';
        } else {
          c += 'yellow';
        }
        return new L.DivIcon({
          html: '<div><span>' + '????????' + '</span></div>',
          className: 'marker-cluster' + c,
          iconSize: new L.Point(40, 40),
        });
      },
    });

    //first cluster
    markers.addLayer(Smolensk);
    markers.addLayer(GrtNovgorod);
    markers.addLayer(Novosybyrsk);
    markers.addLayer(Kurgan);
    markers.addLayer(Tumen);
    markers.addLayer(Tomsk);
    markers.addLayer(Kamyshlov);
    markers.addLayer(Volgograd);
    markers.addLayer(Uryupinst);
    map.addLayer(markers);

    //second cluster
    markers2.addLayer(SosnovyBor);
    markers2.addLayer(StPiter);
    markers2.addLayer(Cherepanovo);
    markers2.addLayer(Barnaul);
    map.addLayer(markers2);

    //third cluster
    markers3.addLayer(Kazan);
    markers3.addLayer(Ekaterinburg);
    markers3.addLayer(Ufa);
    markers3.addLayer(Kaluga);
    markers3.addLayer(Lipetsk);
    map.addLayer(markers3);

    //fourth cluster
    markers4.addLayer(Tuapse);
    markers4.addLayer(Krasnodar);
    markers4.addLayer(NijnyNovgorod);
    markers4.addLayer(Dzerjinsk);
    map.addLayer(markers4);

    const markersSpec = L.markerClusterGroup({
      spiderfyOnMaxZoom: false,
      disableClusteringAtZoom: 4,
      spiderLegPolylineOptions: {
        weight: 0,
        color: '#1BA5D0',
        lineCap: 'butt',
        dashArray: '10 10',
        opacity: 0,
      },
      iconCreateFunction: function (cluster) {
        var childCount = cluster.getChildCount();
        var c = ' marker-cluster-';
        if (childCount < 3) {
          c += 'pink';
        } else if (childCount < 4) {
          c += 'sea';
        } else if (childCount < 5) {
          c += 'blue';
        } else {
          c += 'yellow';
        }
        return new L.DivIcon({
          html: '<div><span>' + '????????' + '</span></div>',
          className: 'marker-cluster' + c,
          iconSize: new L.Point(40, 40),
        });
      },
    });

    markersSpec.addLayer(Sizran);
    markersSpec.addLayer(Zametchino);
    markersSpec.addTo(map);

    const HideGroup = new L.FeatureGroup();
    HideGroup.addLayer(Sterlitamak);
    HideGroup.addLayer(Kazan);
    HideGroup.addLayer(PereslavblZalesski);
    HideGroup.addLayer(Astrahan);
    HideGroup.addLayer(Taganrog);
    HideGroup.addLayer(Ryazan);
    HideGroup.addLayer(Voronej);

    map.on('zoom', function () {
      if (map.getZoom() < 4) {
        map.removeLayer(HideGroup);
      } else {
        map.addLayer(HideGroup);
      }
    });

    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') {
        if ((popupt.classList.contains = 'popShow')) {
          popupt.classList.remove('popShow');
          popupt.classList.add('popHide');
        } else if ((modal.classList.contains = 'modalShow')) {
          modal.classList.remove('modalShow');
          modal.classList.add('modalHide');
        } else {
          return;
        }
      }
    });

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {loading && <Preloader />}

      <PopUp index={index} />
      <LeftTop />
      <RightBottom/>
      <AboutMap/>
      <InfoModal/>
        <p tabIndex={0} title='?????? ???????????????????? ???????????? ?????????????????? ?????????????? ?????????????????????????? ???????????????? ?????? ?????????????? f5' role="alert"></p>
        <p tabIndex={0} title='?????? ???????????????????????? ?????????? ?????????????????????? ???????????????????????? ?????????????? ???????? ?? ??????????, ?????? ???????????? ???? ???????????????? ?? ?????????????? ?????????????? ???????????? ???????????? ?????? ????????????' role="alert"></p>
        <div
          id="map"
          style={{
            width: '100%',
            height: '100%',
            background: 'white',
            margin: '0',
            minHeight: '100vh',
          }}
        />
    </div>
  );
};

export default Map;