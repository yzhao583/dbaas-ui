import * as React from 'react'

const FormBody = ({
  children,
  className,
  style,
  flexlayout = false,
  ...props
}) => (
  <div
    {...props}
    className="pf-c-form"
    style={
      flexlayout
        ? { display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 0, ...(style ?? {}) }
        : { paddingBottom: 0, ...(style ?? {}) }
    }
  >
    {children}
  </div>
)

export default FormBody
