import React from 'react';
import CreateDevice from '../components/CreateDevice.jsx';
const QuerryDevice = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.deviceQuerry();
  }

  return (
    <div id="querryID">
      <form onSubmit={handleSubmit}>
        <input
          id="nameString"
          type="text"
          placeholder="Device Name"
          onChange={props.deviceConfig}
          value={props.nameString}>
        </input>
        <input type="submit" value="Querry a Device"></input>
      </form>
      {props.deviceQuerryTog === true &&
      <div>
        <CreateDevice
          createDevice={props.createDevice}
          generateConfig={props.generateConfig}
          deviceConfig={props.deviceConfig}
          routerOrSwitchToggle={props.routerOrSwitchToggle}
          RouterOrSwitch={props.RouterOrSwitch}
          nameString={props.nameString}
          secretString={props.secretString}
          conString={props.conString}
          auxString={props.auxString}
          vtyString={props.vtyString}
          vlanNumString={props.vlanNumString}
          vlanIPString={props.vlanIPString}
          vlanSubString={props.vlanSubString}
          switchGateString={props.switchGateString}
          bannerInString={props.bannerInString}
          VLanCheck={props.VLanCheck}
          display={props.display}
          />
        </div>}
    </div>
  )
}

export default QuerryDevice;