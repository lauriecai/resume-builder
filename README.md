- App.js
  <!-- Components -->
    <!-- 1. Personal.js -->
    - State: editMode
    - Render:
      - If !editMode: personalDisplay
      - If editMode: <PersonalEdit />
    <!-- 2. PersonalEdit.js -->
    - Render:
      - Form
        - Input * 3
        - Cancel
          - onClick - personal.setState({editMode: false})
        - Save

