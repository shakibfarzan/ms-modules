import { Providers } from '@microsoft/mgt-element';
import React, { useEffect, useState } from 'react'

const URL = "https://graph.microsoft.com/v1.0/me/events";

const AddCalendarEvent: React.FC = () => {
    const [body, setBody] = useState<Record<string, any>>();
    const [accessToken, setAccessToken] = useState<string>();
    useEffect(() => {
        if (!accessToken) Providers.globalProvider.getAccessToken().then((res) => setAccessToken(res));
      }, [accessToken]);
      const postCalendarEvent = async (e: any) => {
        e.preventDefault();
        await fetch(URL, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken ?? '',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(body), // body data type must match "Content-Type" header
        });
      }
  return (
    <form className="flex gap-4 flex-col justify-center">
        <div className='flex gap-2 justify-center items-center'>
            <label htmlFor="subject">Subject:</label>
            <input className='border border-gray-300 rounded-md p-1' id="subject" type="text" placeholder='Subject' onChange={(e) => {
                setBody((current) => {
                    const copy = { ...current };
                    copy["subject"] = e.target.value;
                    return copy;
                    })
                }} 
            />
        </div>
        <div className='flex gap-2 justify-center items-center'>
            <label htmlFor="start-date">Start date:</label>
            <input className='border border-gray-300 rounded-md p-1' id="start-date" type="datetime-local" placeholder='Start date' onChange={(e) => {
                setBody((current) => {
                    const copy = { ...current };
                    copy["start"] = {
                        "dateTime": e.target.value,
                        "timeZone": "UTC"
                    }
                    return copy;
                    })
                }} 
            />
        </div>
        <div className='flex gap-2 justify-center items-center'>
            <label htmlFor="end-date">End date:</label>
            <input className='border border-gray-300 rounded-md p-1' id='end-date' type='datetime-local' placeholder='End date' onChange={(e) => {
                setBody((current) => {
                    const copy = { ...current };
                    copy["end"] = {
                        "dateTime": e.target.value,
                        "timeZone": "UTC"
                    }
                    return copy;
                    })
                }} 
            />
        </div>
        <button type='submit' onClick={postCalendarEvent} className="p-2 w-fit m-auto text-white rounded-md bg-blue-800">
            Post event
        </button>
    </form>
  )
}

export default AddCalendarEvent