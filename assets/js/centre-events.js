// colours for events:
var disabilitySportWalesCol = '#bff2ce'
var danceCol = '#fadaca'
var racquetSportsCol = '#E3826F'
var gymnasticsCol = '#E4A9A4'
var ballgamesCol = '#EFBA97'
var educationalCol = '#f1e9bb'
var combatSportsCol = '#c7c8e7'
var waterSportsCol = '#b0f5f5'

document.addEventListener('DOMContentLoaded', function() {
  // change colours of legend
  document.getElementById("racquetSportsCol").style.backgroundColor = racquetSportsCol;
  document.getElementById("danceCol").style.backgroundColor = danceCol;
  document.getElementById("disabilitySportWalesCol").style.backgroundColor = disabilitySportWalesCol;
  document.getElementById("gymnasticsCol").style.backgroundColor = gymnasticsCol;
  document.getElementById("ballgamesCol").style.backgroundColor = ballgamesCol;
  document.getElementById("educationalCol").style.backgroundColor = educationalCol;
  document.getElementById("combatSportsCol").style.backgroundColor = combatSportsCol;
  document.getElementById("waterSportsCol").style.backgroundColor = waterSportsCol;

  // load calendar
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
      // initialView: 'dayGridMonth',
      themeSystem: 'bootstrap5',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      weekNumbers: false,
      dayMaxEvents: true, 
			// events: {
			// 	url: 'https://raw.githubusercontent.com/Sport-Wales/calendars/main/assets/js/events.json',
			// 	method: 'GET',
			// 	failure: function () {
			// 		alert('There was an error while fetching events');
			// 	}
			// }
      events: [
          {
              title: 'Welsh gymnastics - Main Arena',
              start: '2023-09-10',
              color: gymnasticsCol
          },
          {
              title: 'Welsh Boxing - Main Arena',
              start: '2023-09-15',
              end: '2023-09-17',
              color: combatSportsCol
          },
          {
            title: 'Squash Wales - National Squash Centre',
            start: '2023-09-22',
            end: '2023-09-24',
            color: racquetSportsCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2023-09-23',
            end: '2023-09-24',
            color: gymnasticsCol
          },
          {
            title: 'Welsh Judo Association',
            start: '2023-09-30',
            color: combatSportsCol
          },

          {
              title: 'Table Tennis Wales - Main Arena',
              start: '2023-10-07',
              end: '2023-10-08',
              color: racquetSportsCol
          },
          {
              title: 'Welsh Boxing - Main Arena',
              start: '2023-10-13',
              end: '2023-10-15',
              color: combatSportsCol
          },
          {
              title: 'Squash Wales - National Squash Centre',
              start: '2023-10-13',
              end: '2023-10-15',
              color: racquetSportsCol
          },
          {
              title: 'Welsh gymnastics - Main Arena',
              start: '2023-10-21',
              end: '2023-10-22',
              color: gymnasticsCol
          },
          {
              title: 'Welsh Judo Association',
              start: '2023-10-28',
              end: '2023-10-29',
              color: combatSportsCol
          },
          {
              title: 'Welsh Target Shooting Federation - Main Arena & Jubilee Hall',
              start: '2023-11-02',
              end: '2023-11-05',
              color: combatSportsCol
          },
          {
              title: 'Welsh Fencing Association - Main Arena & Jubilee Hall',
              start: '2023-11-10',
              end: '2023-11-12',
              color: combatSportsCol
          },
          {
              title: 'Welsh Judo Association - National Judo Centre',
              start: '2023-11-11',
              color: combatSportsCol
          },
          {
              title: 'Colleges Wales Sport - Main Arena',
              start: '2023-11-14',
              color: educationalCol
          },
          {
              title: 'Welsh gymnastics - Main Arena',
              start: '2023-11-18',
              end: '2023-11-19',
              color: gymnasticsCol
          },
          {
              title: 'Urdd - Main Arena',
              start: '2023-11-23',
              color: educationalCol
          },
          {
              title: 'Welsh Judo Association - Main Arena',
              start: '2023-11-25',
              color: combatSportsCol
          },
          {
              title: 'Disability Sport Wales - Main Arena',
              start: '2023-11-26',
              color: disabilitySportWalesCol
          },
          {
              title: 'Badminton Wales - Main Arena & Jubilee Hall',
              start: '2023-11-27',
              end: '2023-12-02',
              color: racquetSportsCol
          },

          {
            title: 'Urdd - Main Arena',
            start: '2023-12-05',
            end: '2023-12-05',
            color: educationalCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2023-12-09',
            end: '2023-12-10',
            color: gymnasticsCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2023-12-15',
            end: '2023-12-15',
            color: gymnasticsCol
          },
          {
            title: 'Table Tennis Wales - Main Arena',
            start: '2023-12-16',
            end: '2023-12-17',
            color: racquetSportsCol
          },
          {
            title: 'Welsh Archery Association - Main Arena',
            start: '2024-01-07',
            end: '2024-01-07',
            color: combatSportsCol
          },
          {
            title: 'Table Tennis Wales - Jubilee Hall',
            start: '2024-01-06',
            end: '2024-01-07',
            color: racquetSportsCol
          },
          {
            title: 'British Fencing - Main Arena & Jubilee Hall & National Squash Centre',
            start: '2024-01-08',
            end: '2024-01-14',
            color: combatSportsCol
          },
          {
            title: 'Football Association of Wales - Main Arena',
            start: '2024-01-17',
            end: '2024-01-18',
            color: ballgamesCol
          },
          {
            title: 'Rebellion Allstars Dance & Cheer - Main Arena',
            start: '2024-01-20',
            end: '2024-01-20',
            color: danceCol
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-01-21',
            end: '2024-01-21',
            color: racquetSportsCol
          },
          {
            title: 'Table Tennis Wales - Main Arena & Jubilee Hall',
            start: '2024-01-27',
            end: '2024-01-28',
            color: racquetSportsCol
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-02-03',
            end: '2024-02-04',
            color: racquetSportsCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2024-02-05',
            end: '2024-02-05',
            color: gymnasticsCol
          },
          {
            title: 'Welsh Rowing - Main Arena',
            start: '2024-02-06',
            end: '2024-02-06',
            color: waterSportsCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2024-02-09',
            end: '2024-02-11',
            color: gymnasticsCol
          },
          {
            title: 'Squash Wales - National Squash Centre',
            start: '2024-02-09',
            end: '2024-02-11',
            color: racquetSportsCol
          },
          {
            title: 'Welsh Fencing Association - Jubilee Hall',
            start: '2024-02-11',
            end: '2024-02-11',
            color: combatSportsCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2024-02-15',
            end: '2024-02-18',
            color: gymnasticsCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2024-02-21',
            end: '2024-02-21',
            color: gymnasticsCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2024-02-24',
            end: '2024-02-25',
            color: gymnasticsCol
          },
          {
            title: 'Welsh Fencing Association - Jubilee Hall',
            start: '2024-02-24',
            end: '2024-02-25',
            color: combatSportsCol
          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2024-02-29',
            end: '2024-02-29',
            color: gymnasticsCol

          },
          {
            title: 'Welsh gymnastics - Main Arena',
            start: '2024-03-02',
            end: '2024-03-03',
            color: gymnasticsCol
          },
          {
            title: 'Welsh Fencing Association - Jubilee Hall',
            start: '2024-03-03',
            end: '2024-03-03',
            color: combatSportsCol
          },
          {
            title: 'Careers Wales - Main Arena',
            start: '2024-03-05',
            end: '2024-03-05',
            color: educationalCol
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-03-07',
            end: '2024-03-07',
            color: racquetSportsCol
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-03-09',
            end: '2024-03-10',
            color: racquetSportsCol
          },
          {
            title: 'Cardiff Dragons Arts & Sports Club - Main Arena',
            start: '2024-03-16',
            end: '2024-03-16',
            color: educationalCol
          },
          {
            title: 'Wales Netball - Main Arena',
            start: '2024-03-17',
            end: '2024-03-17',
            color: ballgamesCol
          },
          {
            title: 'United Dance Organisation - Main Arena',
            start: '2024-03-20',
            end: '2024-03-20',
            color: danceCol
          },
          {
            title: 'Table Tennis Wales - Main Arena',
            start: '2024-03-23',
            end: '2024-03-24',
            color: racquetSportsCol
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-04-13',
            end: '2024-04-14',
            color: gymnasticsCol
          },
          {
            title: 'Quad National Wheelchair Rugby - Main Arena',
            start: '2024-04-15',
            end: '2024-04-19',
            color: disabilitySportWalesCol
          },
          {
            title: 'Welsh Boxing - Main Arena',
            start: '2024-04-19',
            end: '2024-04-22',
            color: combatSportsCol
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-04-23',
            color: gymnasticsCol
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-04-24',
            color: racquetSportsCol
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-04-25',
            color: gymnasticsCol
          },
          {
            title: 'Welsh Boxing - Main Arena',
            start: '2024-04-26',
			end: '2024-04-28',
            color: combatSportsCol
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-05-04',
            color: racquetSportsCol
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-05-11',
			end: '2024-05-13',
            color: gymnasticsCol
          },
          {
            title: 'Welsh Boxing - Main Arena',
            start: '2024-05-17',
			end: '2024-05-20',
            color: combatSportsCol
          },
      ],
      eventTextColor: '#000'
  });

  calendar.render();
});
