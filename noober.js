



async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()


  // writes the returned JSON to the console
  console.dir(json)


  // 🔥 start here: write code to loop through the rides


  for (let i = 0; i < json.length; i++) {
    let ride = json[i]

    if (ride.length > 1) {
      levelOfService = 'Noober Pool'
      for (let l = 0; l < ride.length; l++) {
        let leg = ride[l]
        console.log(leg)
        let passengerName = `${ride[l].passengerDetails.first} ${ride[l].passengerDetails.last}`
        let passengerPhone = ride[l].passengerDetails.phoneNumber
        let passengerNumberOfPassengers = ride[l].numberOfPassengers
        let passengerPickupAddressLine1 = ride[l].pickupLocation.address
        let passengerPickupAddressLine2 = `${ride[l].pickupLocation.city}, ${ride[l].pickupLocation.state} ${ride[l].pickupLocation.zip}`
        let passengerDropoffAddressLine1 = ride[l].dropoffLocation.address
        let passengerDropoffAddressLine2 = `${ride[l].dropoffLocation.city}, ${ride[l].dropoffLocation.state} ${ride[l].dropoffLocation.zip}`

        document.querySelector('.rides').insertAdjacentHTML('beforeend',
          `    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
        </h1>
    
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers}
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
        </div>
    
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers}
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
        </div>
    `)
      }


    } else if (ride[0].purpleRequested) {
      levelOfService = 'Noober Purple'
      let passengerName = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
      let passengerPhone = ride[0].passengerDetails.phoneNumber
      let passengerNumberOfPassengers = ride[0].numberOfPassengers
      let passengerPickupAddressLine1 = ride[0].pickupLocation.address
      let passengerPickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
      let passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
      let passengerDropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`

      document.querySelector('.rides').insertAdjacentHTML('beforeend',
        `    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
            ${passengerNumberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>`
      )

    } else if (ride[0].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
      let passengerName = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
      let passengerPhone = ride[0].passengerDetails.phoneNumber
      let passengerNumberOfPassengers = ride[0].numberOfPassengers
      let passengerPickupAddressLine1 = ride[0].pickupLocation.address
      let passengerPickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
      let passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
      let passengerDropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`

      document.querySelector('.rides').insertAdjacentHTML('beforeend',
        `    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>`
      )

    } else {
      levelOfService = 'Noober X'
      let passengerName = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`
      let passengerPhone = ride[0].passengerDetails.phoneNumber
      let passengerNumberOfPassengers = ride[0].numberOfPassengers
      let passengerPickupAddressLine1 = ride[0].pickupLocation.address
      let passengerPickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
      let passengerDropoffAddressLine1 = ride[0].dropoffLocation.address
      let passengerDropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`

      document.querySelector('.rides').insertAdjacentHTML('beforeend',
        `     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService}</span>
      </h1>
  
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${passengerNumberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${passengerPickupAddressLine1}</p>
            <p>${passengerPickupAddressLine2}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${passengerDropoffAddressLine1}</p>
            <p>${passengerDropoffAddressLine2}</p>
          </div>
        </div>
      </div>
  
  `)
    }

  }





}

window.addEventListener('DOMContentLoaded', pageLoaded)

