import React from "react"
import Mailchimp from 'react-mailchimp-form'

const MailchimpURL = '<mailchimp_url>';

const SubscribeBox = () => {
    return (
        <div className="subscribeBox">
          <h5 style={{color:"white"}}>Get our posts and career advice delivered to you</h5>
          <Mailchimp
          action={MailchimpURL}
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true
            }
          ]}
          className='subscribe'
          />
        </div>
    );
}

export default SubscribeBox;