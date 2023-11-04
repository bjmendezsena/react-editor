import { useContext } from "react"
import { DesignEditorContext } from "~/contexts/DesignEditor"

const useDesignEditorContext = () => useContext(DesignEditorContext)

export default useDesignEditorContext
