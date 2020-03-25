  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Switch Language
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            French
          </a>
          <a className="navbar-item">
            English
          </a>
          {/* <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a> */}
        </div>
      </div>
    </div>
  </div>

// ______________original select___________//
    <div className="field" style={{ fontFamily: "Roboto" }}>
        <div className="control">
            <div className="select is-primary" onBlur={props.toggleLang} role={'checkbox'} aria-checked>
                <select onChange={props.toggleLang}>
                    <option style={{ fontFamily: "Roboto" }}>fr</option>
                    <option style={{ fontFamily: "Roboto" }}>en</option>
                </select>
            </div>
        </div>
    </div>
            { flags[props.lang] }