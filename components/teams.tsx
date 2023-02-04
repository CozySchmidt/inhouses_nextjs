"use client"
import React, { useEffect, useState } from 'react'
import LeftTeam from './left_team'
import RightTeam from './right_team'

export default function Teams() {

  const [champ_list, setChampList] = useState([])
  const [name_list, setNameList] = useState([])
  const champ_name_json = "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"
  const champ_icon_json = "http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/{}.png"

  useEffect(() => {
    fetch(champ_name_json)
    .then(res => res.json())
    .then(data => setChampList(data.data))
  }, [])

  console.log(Object.keys(champ_list))

  return (
    <div className="flex justify-center p-20">
      <div className='grid grid-cols-2 gap-5 '>
              <LeftTeam/>
              <RightTeam/>
              {
                
              }
      </div>
    </div>

  )
    
}
