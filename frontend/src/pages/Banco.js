import { Text, View } from 'react-native'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

// Standard badge
<Badge value="99+" status="error" />
<Badge value={<Text>My Custom Badge</Text>} />

// Mini badge
<Badge status="success" />
<Badge status="error" />
<Badge status="primary" />
<Badge status="warning" />

// Avatar with mini badge
<View>
  <Avatar
    rounded
    source={{
      uri: 'https://randomuser.me/api/portraits/men/41.jpg',
    }}
    size="large"
  />

  <Badge
    status="success"
    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
  />
</View>

// withBadge HOC

const BadgedIcon = withBadge(1)(Icon)
<BadgedIcon type="ionicon" name="ios-chatbubbles" />

// Using the decorator proposal
@connect(state => ({
  notifications: state.notifications,
}))
@withBadge(props => props.notifications.length)
export default class MyDecoratedIcon extends React.Component {
  render() {
    return (
      <Icon type="ionicon" name="md-cart" />
    );
  }
}