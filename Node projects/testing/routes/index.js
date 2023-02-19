var express = require('express');
var router = express.Router();
const request = require('request');


var user='mintcredit';
var password='mintcredit123';

var base64encodedData = Buffer.from(user + ':' + password).toString('base64');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express has been' });
});


var options = {
  url: 'https://api.hubapi.com/crm/v3/objects/contacts/',
  method: 'GET', // Don't forget this line
  headers: {
    'Authorization': `Bearer pat-na1-61a724b5-312d-4a98-9bbf-28d8872cd92f`,
    'Content-Type': 'application/json'
  },
};

router.get('/users', function(req, res) {
  request(options, function(error, response, body) {
    var data = JSON.parse(body);

   // console.log(data.results);

    data.results.forEach(function (item) {
        console.log(item.id);
       // console.log(item.Name);
       var id = item.id;
       var hubspot_single_user_options = {
          url: 'https://api.hubapi.com/crm/v3/objects/contacts/'+id+'?properties=firstname,middle_name,lastname,phone,email,birth_date,gender,id_number,kra_pin,town,resedential_address,employer_name,staff_number,designation,date_of_employment,employer_physical_address,town_city,terms_of-employments,work_email,employment_letter,passport_photo',
          method: 'GET', // Don't forget this line
          headers: {
            'Authorization': `Bearer pat-na1-61a724b5-312d-4a98-9bbf-28d8872cd92f`,
            'Content-Type': 'application/json'
          },
        };
        
                request(hubspot_single_user_options, function(error, response, body) {
                  //res.json(body)
                //console.log(body);

                var data = JSON.parse(body);
                // console.log(data.properties);

        
                  var birth_date=data.properties.birth_date;
                  var createdate=data.properties.createdate;
                  var date_of_employment=data.properties.date_of_employment;
                  var designation=data.properties.designation;

                  var email=data.properties.email;
                  var employer_physical_address=data.properties.employer_physical_address;
                  var employment_letter=data.properties.employment_letter;
                  var firstname=data.properties.firstname;
                  var  gender=data.properties.gender;
                  var  hs_object_id=data.properties.hs_object_id;
                  var id_number=data.properties.id_number;
                  var kra_pin=data.properties
                  var lastmodifieddate=data.properties.lastmodifieddate;
                  var lastname=data.properties.lastname;
                  var  middle_name=data.properties.middle_name;
                  var  passport_photo=data.properties.passport_photo;
                  var phone=data.properties.phone;
                  var staff_number=data.properties.staff_number;
                  var  town=data.properties.town;
                  var town_city=data.properties.town_city;
                  var work_email=data.properties.work_email;
                  console.log(lastname);
        
                });
    });

    var req_body ={
      "officeId": "1",
      "firstname": "firstname",
      "designation":'',
        "staffId": "1",	
      "lastname": "lastname",
      "middlename": "middlename",
      "mobileNo": "0720080000",
      "mobileNoSecondary": "",
      "emailAddress": "emailAddress@gmail.com",
      "dateFormat": "dd-MM-yyyy",
      "locale": "en",
      "genderId": "219",
      "active": false,
      "tagIds": [],

      "dateOfBirth": "01-05-1998"
    };

    let miny = JSON.stringify(req_body);

    

var musoni_options = {
  url: 'https://api.demo.irl.musoniservices.com/v1/clients',
  method: 'POST', // Don't forget this line
  headers: {
    'Authorization': 'Basic ' + base64encodedData,
    'x-api-key':'PrzW0k0wTU4pZKzhUR0mG3rkSoknf8jW2ptCbOPI',
    'X-Fineract-Platform-TenantId':'mintcredit',
    'Content-Type': 'application/json'
  },
  body:miny,

  
};
      // request(musoni_options, function(error, response, body) {
      //   //res.json(body)
      // console.log(body);

      // });
      //res.json(body)
  });
});



module.exports = router;
